import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import { RecoilRoot } from 'recoil';

import '@src/styles/reset.css';

import '@src/styles/common.css';

import { handlers } from '../__mocks__/apis/handlers';
import { initAxiosConfig, interceptorsAxiosConfig } from '../src/configs/axios';

initialize();
initAxiosConfig();
interceptorsAxiosConfig();

export const decorators = [
  mswDecorator,
  (Story) => (
    <RecoilRoot>
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    </RecoilRoot>
  ),
];

export const parameters = {
  msw: {
    handlers: handlers,
  },
  actions: { argTypesRegex: '^on.*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

document.documentElement.setAttribute('data-color-mode', 'dark');
