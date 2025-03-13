import { Game, Platform } from '@/hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import PlatformIcons from './PlatformIcons';

interface Props {
  game: Game;
}

const getPlatformIconsList = (list: { platform: Platform }[]) => {
  return list.map((x) => ({ id: x.platform.id, slug: x.platform.slug }));
};

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatformIcons
          platforms={getPlatformIconsList(game.parent_platforms)}
        />
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
