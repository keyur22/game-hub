import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { Response } from '@/services/api-client';
import useGameQueryStore, { GameQuery } from '@/store';
import { Game } from '../entities/Game';
import { useAppSelector } from '@/store/hooks';

const apiClient = new APIClient<Game>('/games');

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
  // const gameQuery = useGameQueryStore((state) => state.gameQuery);
  const gameQuery = useAppSelector((state) => state.gameQuery);

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
