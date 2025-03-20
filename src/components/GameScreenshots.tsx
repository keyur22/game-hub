import useScreenshots from '@/hooks/useScreenshots';
import { HStack, Image, SimpleGrid, Spinner } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);
  console.log(screenshots, error, isLoading);

  if (isLoading)
    return (
      <HStack justifyContent='center' margin={5}>
        <Spinner />
      </HStack>
    );

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={10}>
      {screenshots?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
