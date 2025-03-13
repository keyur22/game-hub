import useGenres, { Genre } from '@/hooks/useGenres';
import { getCroppedImageUrl } from '@/services/image-url';
import { List, HStack, Image, Spinner, Button } from '@chakra-ui/react';

interface Props {
  onGenreSelect: (genre: Genre) => void;
}

const GenreList = ({ onGenreSelect }: Props) => {
  const { loading, data: genres, error } = useGenres();

  if (loading)
    return (
      <HStack justifyContent='center' p={5}>
        <Spinner />
      </HStack>
    );

  if (error) return null;

  return (
    <List.Root listStyle='none' p={5} gap={5}>
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize='32px'
              borderRadius={8}
              alt={genre.name}
            />
            <Button onClick={() => onGenreSelect(genre)} variant='ghost'>
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
