import { useQuery } from '@tanstack/react-query';
import apiClient, { Response } from '@/services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = () =>
  apiClient.get<Response<Genre>>('/genres').then((res) => res.data.results);

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => fetchGenres(),
    staleTime: 24 * 60 * 60 * 1000 // 24h
  });

export default useGenres;
