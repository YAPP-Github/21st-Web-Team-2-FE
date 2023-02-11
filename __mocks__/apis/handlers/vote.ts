import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { VoteRequest } from '@src/apis';
import { BASE_URL } from '@src/configs/axios';

const vote = (req: RestRequest<VoteRequest>, res: ResponseComposition, ctx: RestContext) => {
  return res(ctx.status(200));
};

const voteHandler = [
  rest.post(`${BASE_URL}/vote/option`, vote), //
] as const;

export default voteHandler;
