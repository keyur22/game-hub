import apiClient from '@/services/api-client';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export interface Platform {
  id: number;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  const fetchGames = async (signal: AbortSignal) => {
    setLoading(true);
    try {
      const resp = await apiClient.get<GamesResponse>('/games', { signal });
      setGames(resp.data.results);
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      if (err instanceof Error) setError(err?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetchGames(abortController.signal);

    return () => abortController.abort();
  }, []);

  return { loading, games, error };
};

export default useGames;
