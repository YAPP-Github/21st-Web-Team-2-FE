import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Example from '../components/Example';
import queryClient from '../configs/queryClient';
import '../styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Example title={'TEST'} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
