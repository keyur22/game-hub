import useData from './useData';
import { Genre } from './useGenres';
import { Platform as Platforms } from '@/hooks/usePlatforms';

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platforms | null
) =>
  useData<Game>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
