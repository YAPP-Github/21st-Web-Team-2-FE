import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

import '@src/styles/reset.css';

import '@src/styles/common.css';

import { initAxiosConfig, interceptorsAxiosConfig } from '@src/configs/axios';
import queryClient from '@src/configs/queryClient';
import '@src/configs/recoil';
import isServer from '@src/utils/isServer';

initAxiosConfig();

if (!isServer()) {
  interceptorsAxiosConfig();
}

if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_MSW === 'true') {
  if (typeof window === 'undefined') {
    (async () => {
      const { server } = await import('@mocks/apis/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('@mocks/apis/browser');
      await worker.start();
    })();
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (!domLoaded) return;
    document.documentElement.setAttribute('data-color-mode', 'dark');
  }, [domLoaded]);

  if (!domLoaded || typeof window === 'undefined') {
    return null;
  }

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
