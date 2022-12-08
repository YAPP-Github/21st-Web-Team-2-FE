import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';

import mockApis from '../__mocks__/apis';
import '../src/styles/reset.css';

initialize();

export const decorators = [
  mswDecorator,
  (Story) => (
    <QueryClientProvider client={new QueryClient()}>
      <Story />
    </QueryClientProvider>
  ),
];

export const parameters = {
  msw: mockApis,
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
