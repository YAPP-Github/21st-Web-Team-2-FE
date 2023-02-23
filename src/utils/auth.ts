import { AxiosRequestConfig } from 'axios';

import { Auth } from '@src/apis';
import { COOKIE_KEYS } from '@src/constants';
import cookie from '@src/utils/cookie';

export const getTokens = (cookieString?: string): Auth['jwtTokens'] | undefined => {
  if (!cookieString) return;

  const cookieData = cookie.parse(cookieString);
  if (!cookieData) return;

  return cookieData[COOKIE_KEYS.TOKENS] as Auth['jwtTokens'];
};

export const getAuthConfig = (accessToken?: string): AxiosRequestConfig | undefined => {
  return accessToken
    ? {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : null,
        },
      }
    : undefined;
};
