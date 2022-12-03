import { initialize, mswDecorator } from 'msw-storybook-addon';
import * as NextImage from 'next/image';

import mockApis from '../__mocks__/apis';
import '../src/styles/reset.css';

initialize();

export const decorators = [mswDecorator];

export const parameters = {
  msw: mockApis,
  actions: { argTypesRegex: '^on.*' },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
