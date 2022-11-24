import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import queryClient from '../configs/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  /*
  // DELETE-GYU: 주석을 제거하고 ESLint 및 prettier 가 적용되는지 확인해주세요! (모두 확인되면 지울 예정!)
  // *https://github.com/YAPP-Github/21st-Web-Team-2-FE/wiki/eslint-%EC%84%A4%EC%A0%95-%EB%B0%8F-%ED%99%95%EC%9D%B8-%EB%B0%A9%EB%B2%95 (참고)
          console.log();;;;;
  let APP_VERSION = "v1.0.0"
  */

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
