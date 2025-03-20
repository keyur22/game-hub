import { Platform } from '@/entities/Platform';

export const getPlatformIconsList = (list: { platform: Platform }[]) => {
  if (!list?.length) return null;

  return list.map((x) => ({
    id: x.platform.id,
    slug: x.platform.slug,
    name: x.platform.name
  }));
};
