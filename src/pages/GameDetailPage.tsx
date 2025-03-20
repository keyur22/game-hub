import ExpandableText from '@/components/ExpandableText';
import GameAttributesList from '@/components/GameAttributesList';
import GameScreenshots from '@/components/GameScreenshots';
import useGame from '@/hooks/useGame';
import {
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spinner
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <HStack justifyContent='center' margin={5}>
        <Spinner />
      </HStack>
    );

  if (error || !game) throw error;

  return (
    <SimpleGrid
      padding={{ base: 4, md: 5 }}
      columns={{ base: 1, md: 2 }}
      gap={5}
      mb={6}
    >
      <GridItem>
        <Heading size='4xl' fontWeight='bold' mb={5}>
          {game?.name}
        </Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributesList game={game} />
      </GridItem>
      <GridItem>
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
