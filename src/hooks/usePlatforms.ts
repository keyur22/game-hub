import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  games_count: number;
}

const usePlatforms = () => useData<Platform>('/platforms');

export default usePlatforms;
