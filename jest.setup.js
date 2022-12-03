import '@testing-library/jest-dom/extend-expect';

import { server } from './__mocks__/apis/server';

/* eslint-disable */

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());
