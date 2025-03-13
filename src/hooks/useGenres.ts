import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export interface Genre {
  id: number;
  name: string;
  background_image: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  const fetchGenres = async (signal: AbortSignal) => {
    setLoading(true);
    try {
      const resp = await apiClient.get<GenreResponse>('/genres', { signal });
      setGenres(resp.data.results);
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof Error) setError(err?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchGenres(abortController.signal);

    return () => abortController.abort();
  }, []);

  return { loading, genres, error };
};

export default useGenres;
