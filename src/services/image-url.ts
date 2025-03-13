import ImagePlaceholder from '../assets/no-image-placeholder.webp';

export const getCroppedImageUrl = (url: string) => {
  if (!url) return ImagePlaceholder;

  const target = 'media/';

  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
