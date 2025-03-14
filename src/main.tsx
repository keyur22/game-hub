import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from './components/ui/color-mode.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
