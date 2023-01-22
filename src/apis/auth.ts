import axios from 'axios';

import { BaseResponse } from '.';

interface Auth {
  isMember: boolean;
  jwtTokens: {
    accessToken: string;
    refreshToken: string;
  };
}

/**
 * 로그인
 */
export type PostSigninResponseData = BaseResponse<Auth>;
export const signin = async (authCode: string) => {
  const res = await axios.post<PostSigninResponseData>(`/auth/signin`, null, {
    headers: {
      'auth-code': authCode,
    },
  });

  return res.data.data;
};
