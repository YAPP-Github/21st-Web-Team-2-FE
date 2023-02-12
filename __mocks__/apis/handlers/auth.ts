import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { ErrorResponse, PostCheckNickName, PostLogout, PostSigninResponse, PostSignupResponse } from '@src/apis';
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

const logout = (req: RestRequest<{ nickname: string }>, res: ResponseComposition, ctx: RestContext) => {
  const refreshToken = req.headers.get('Refresh-Token');

  if (refreshToken) {
    return res(
      ctx.status(200),
      ctx.json<PostLogout>({
        code: 'SUCCESS',
        message: '성공',
      }),
    );
  }

  return res(
    ctx.status(401),
    ctx.json<ErrorResponse>({
      code: '2006',
      message: '유효하지 않은 리프레쉬 토큰입니다.',
    }),
  );
};

export const authHandler = [
  rest.post(`${BASE_URL}/auth/signin`, signin), //
  rest.post(`${BASE_URL}/auth/signup`, signup),
  rest.post(`${BASE_URL}/nickname-duplication`, checkNickName),
  rest.post(`${BASE_URL}/logout`, logout),
];
