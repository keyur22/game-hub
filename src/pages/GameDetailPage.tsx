import ExpandableText from '@/components/ExpandableText';
import GameAttributesList from '@/components/GameAttributesList';
import GameScreenshots from '@/components/GameScreenshots';
import useGame from '@/hooks/useGame';
import { Box, Heading, HStack, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  console.log(game?.id);

  if (isLoading)
    return (
      <HStack justifyContent='center' margin={5}>
        <Spinner />
      </HStack>
    );

  if (error || !game) throw error;

  return (
    <Box padding={{ base: 4, md: 5 }}>
      <Heading size='4xl' fontWeight='bold' mb={5}>
        {game?.name}
      </Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributesList game={game} />
      <GameScreenshots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
