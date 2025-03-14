import { GameQuery } from '@/App';
import { useQuery } from '@tanstack/react-query';
import apiClient, { Response } from '@/services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const fetchGames = (gameQuery: GameQuery) => {
  const { genre, platform, searchInput, sortOrder } = gameQuery;

  return apiClient
    .get<Response<Game>>('/games', {
      params: {
        genres: genre?.id,
        parent_platforms: platform?.id,
        ordering: sortOrder,
        search: searchInput
      }
    })
    .then((res) => res.data.results);
};

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => fetchGames(gameQuery)
  });

export default useGames;
