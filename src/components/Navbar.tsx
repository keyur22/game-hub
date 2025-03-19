import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HStack padding={3}>
      <Link to='/'>
        <Image src={Logo} alt='Logo' boxSize='60px' />
      </Link>
      <SearchInput />
      <ColorModeButton margin='0 0 0 auto' />
    </HStack>
  );
};

export default Navbar;
