import { useQuery } from '@tanstack/react-query';
import apiClient, { Response } from '@/services/api-client';

export interface Platform {
  id: number;
  name: string;
  games_count: number;
}

const fetchPlatforms = () =>
  apiClient
    .get<Response<Platform>>('/platforms')
    .then((res) => res.data.results);

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () => fetchPlatforms(),
    staleTime: 24 * 60 * 60 * 1000 // 24h
  });

export default usePlatforms;
