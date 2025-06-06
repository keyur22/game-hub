import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import GameDetailPage from './pages/GameDetailPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      { path: 'games/:slug', element: <GameDetailPage /> }
    ]
  }
]);

export default router;
