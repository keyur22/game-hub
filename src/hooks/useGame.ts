import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Game } from './useGames';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['game', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000 // 24h
  });
export default useGame;
