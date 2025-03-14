import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={1}>
      <Image src={Logo} alt='Logo' boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton margin='0 0 0 auto' />
    </HStack>
  );
};

export default Navbar;
