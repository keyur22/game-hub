import { Input } from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      onSearch(inputRef.current?.value);
      inputRef.current.blur();
    }
    return;
  };

  return (
    <form onSubmit={onSearchSubmit} className='search-input-form'>
      <InputGroup flex='1' w='full' startElement={<BsSearch />}>
        <Input
          placeholder='Search Games...'
          borderRadius={20}
          variant='subtle'
          ref={inputRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
