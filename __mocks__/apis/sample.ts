//TODO: api 생성 후 삭제
import { rest } from 'msw';

export const mockApiSample = rest.post('/test', (req, res, ctx) => res(ctx.json(1)));
