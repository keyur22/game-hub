import { Platform } from '@/hooks/useGames';

export const getPlatformIconsList = (list: { platform: Platform }[]) => {
  if (!list?.length) return null;
  return list.map((x) => ({ id: x.platform.id, slug: x.platform.slug }));
};
