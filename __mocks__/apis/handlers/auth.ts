import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { PostCheckNickName, PostSigninResponse, PostSignupResponse } from '@src/apis/auth';
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

const signup = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<PostSignupResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: {
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      },
    }),
  );
};

const checkNickName = (req: RestRequest<{ nickname: string }>, res: ResponseComposition, ctx: RestContext) => {
  const { nickname } = req.body;

  return res(
    ctx.status(200),
    ctx.json<PostCheckNickName>({
      code: 'SUCCESS',
      message: '성공',
      data: {
        isDuplicated: !!(nickname === 'conflict'),
      },
    }),
  );
};

export const authHandler = [
  rest.post(`${BASE_URL}/auth/signin`, signin), //
  rest.post(`${BASE_URL}/auth/signup`, signup),
  rest.post(`${BASE_URL}/nickname-duplication`, checkNickName),
];
