import useScreenshots from '@/hooks/useScreenshots';
import { HStack, Image, SimpleGrid, Spinner } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading)
    return (
      <HStack justifyContent='center' margin={5}>
        <Spinner />
      </HStack>
    );

  if (error) throw error;

  if (!screenshots?.results.length) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      {screenshots?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} loading='lazy' />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
