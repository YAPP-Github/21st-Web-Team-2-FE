import axios from 'axios';

import { Onboarding } from '@src/pages/onboarding';

import { BaseResponse } from '.';

export interface Auth {
  isMember: boolean;
  jwtTokens: {
    accessToken: string;
    refreshToken: string;
  };
}

/**
 * 로그인
 */
export type PostSigninResponse = BaseResponse<Auth>;
export const signin = async (authCode: string) => {
  const res = await axios.post<PostSigninResponse>(`/auth/signin`, null, {
    headers: {
      'auth-code': authCode,
    },
  });

  return res.data.data;
};

/**
 * 회원가입
 */
export type PostSignupResponse = BaseResponse<Auth['jwtTokens']>;
export const signup = async (onboarding: Onboarding) => {
  const res = await axios.post<PostSignupResponse>(`/auth/signup`, onboarding);

  return res.data.data;
};

/**
 * 닉네임 중복
 */
export interface CheckNickName {
  isDuplicated: boolean;
}
export type PostCheckNickName = BaseResponse<CheckNickName>;
export const checkNickName = async (nickName: string) => {
  const res = await axios.post<PostCheckNickName>(`/nickname-duplication`, {
    nickname: nickName,
  });

  return res.data.data;
};
