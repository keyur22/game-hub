import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  throw new Error('test error');

  const { id } = useParams();

  return <div>Detail Page {id}</div>;
};

export default GameDetailPage;
