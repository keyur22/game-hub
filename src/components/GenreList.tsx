import useGenres, { Genre } from '@/hooks/useGenres';
import { getCroppedImageUrl } from '@/services/image-url';
import {
  List,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
  Box
} from '@chakra-ui/react';

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { loading, data: genres, error } = useGenres();

  if (loading)
    return (
      <HStack justifyContent='center' p={5}>
        <Spinner />
      </HStack>
    );

  if (error) return null;

  return (
    <Box p={5}>
      <Heading mb={5} size='2xl' fontWeight='bold'>
        Genres
      </Heading>
      <List.Root listStyle='none' gap={5}>
        {genres.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
                alt={genre.name}
                objectFit='cover'
              />
              <Button
                onClick={() => onGenreSelect(genre)}
                variant='ghost'
                fontWeight={
                  selectedGenre?.id === genre.id ? 'bolder' : 'normal'
                }
                whiteSpace='normal'
                textAlign='left'
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default GenreList;
