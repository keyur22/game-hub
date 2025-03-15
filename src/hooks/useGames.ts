import { GameQuery } from '@/App';
import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/api-client';
import { Platform } from './usePlatforms';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const fetchGames = (gameQuery: GameQuery) => {
  const { genre, platform, searchInput, sortOrder } = gameQuery;

  return apiClient.getAll({
    params: {
      genres: genre?.id,
      parent_platforms: platform?.id,
      ordering: sortOrder,
      search: searchInput
    }
  });
};

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => fetchGames(gameQuery)
  });

export default useGames;
