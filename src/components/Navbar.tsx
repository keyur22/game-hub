import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';

const Navbar = () => {
  return (
    <HStack padding={1}>
      <Image src={Logo} alt='Logo' boxSize='60px' />
      <Text>NavBar</Text>
      <ColorModeButton margin='0 0 0 auto' />
    </HStack>
  );
};

export default Navbar;
