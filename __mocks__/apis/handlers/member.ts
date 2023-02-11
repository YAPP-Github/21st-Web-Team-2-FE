import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { MEMBER } from '@mocks/data/member';

import { ErrorResponse, GetMemberResponse } from '@src/apis';
import { BASE_URL } from '@src/configs/axios';

const getMember = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  const authorization = req.headers.get('authorization');

  if (authorization) {
    return res(
      ctx.status(200),
      ctx.json<GetMemberResponse>({
        code: 'SUCCESS',
        message: '성공',
        data: MEMBER,
      }),
    );
  }

  return res(
    ctx.status(401),
    ctx.json<ErrorResponse>({
      code: '2003',
      message: '엑세스 토큰이 필요합니다.',
    }),
  );
};

export const memberHandler = [
  rest.get(`${BASE_URL}/member`, getMember), //
];
