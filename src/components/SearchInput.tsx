import { Input } from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import useGameQueryStore from '@/store';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { setSearchInput } from '@/store/gameQuerySlice';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const setSearchInput = useGameQueryStore((state) => state.setSearchInput);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(setSearchInput(inputRef.current?.value));
      // setSearchInput(inputRef.current?.value);
      inputRef.current.blur();
      navigate('/');
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
