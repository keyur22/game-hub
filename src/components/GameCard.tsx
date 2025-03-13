import { Game } from '@/hooks/useGames';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIcons from './PlatformIcons';
import CriticScore from './CriticScore';
import { getPlatformIconsList } from '@/utils/platform-icons';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack
          gap={3}
          pt={5}
          justifyContent='space-between'
          alignItems='center'
        >
          <PlatformIcons
            platforms={getPlatformIconsList(game.parent_platforms)}
          />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
