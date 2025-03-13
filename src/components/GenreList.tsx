import useGenres from '@/hooks/useGenres';

const GenreList = () => {
  const { loading, genres, error } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
};

export default GenreList;
