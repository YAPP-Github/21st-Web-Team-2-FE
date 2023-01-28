import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { PostSigninResponse } from '@src/apis/auth';
import { BASE_URL } from '@src/configs/axios';

const NEW_MEMBER = false;
const MEMBER = true;

const AUTH_DATA = {
  isMember: MEMBER,
  jwtTokens: {
    accessToken: 'access-token',
    refreshToken: 'refresh-token',
  },
};

const signin = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(201),
    ctx.json<PostSigninResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: AUTH_DATA,
    }),
  );
};

export const authHandler = [
  rest.post(`${BASE_URL}/auth/signin`, signin), //
];
