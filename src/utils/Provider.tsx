'use client';
// import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

const client = new QueryClient();

function Provider({ children }: ProviderProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        {/* <ReactQueryStreamedHydration> */}
        {children}
        {/* </ReactQueryStreamedHydration> */}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export { Provider };
