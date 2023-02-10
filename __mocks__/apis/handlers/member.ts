import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { MEMBER } from '@mocks/data/member';

import { GetMemberResponse } from '@src/apis';
import { BASE_URL } from '@src/configs/axios';

const getMember = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<GetMemberResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: MEMBER,
    }),
  );
};

export const memberHandler = [
  rest.get(`${BASE_URL}/member`, getMember), //
];
