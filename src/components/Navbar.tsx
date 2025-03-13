import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';

const Navbar = () => {
  return (
    <HStack>
      <Image src={Logo} alt='Logo' boxSize='60px' />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
