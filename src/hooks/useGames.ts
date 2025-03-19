import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { Response } from '@/services/api-client';
import { Platform } from './usePlatforms';
import useGameQueryStore, { GameQuery } from '@/store';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}

const fetchGames = (gameQuery: GameQuery, pageParam: unknown) => {
  const { genreId, platformId, searchInput, sortOrder } = gameQuery;

  return apiClient.getAll({
    params: {
      genres: genreId,
      parent_platforms: platformId,
      ordering: sortOrder,
      search: searchInput,
      page: pageParam
    }
  });
};

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery<Response<Game>>({
    initialPageParam: 1,
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => fetchGames(gameQuery, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.next ? allPages.length + 1 : undefined;
    }
  });
};

export default useGames;
