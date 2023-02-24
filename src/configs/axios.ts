import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Auth, ErrorResponse } from '@src/apis';
import { COOKIE_KEYS } from '@src/constants';
import cookie from '@src/utils/cookie';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};

export const configAxiosInterceptor = () => {
  configRequestInterceptor();
  configResponseInterceptor();
};

const configRequestInterceptor = () => {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const tokens = cookie.get(COOKIE_KEYS.TOKENS);
    if (!tokens) return config;

    const parsedData = JSON.parse(tokens) as Auth['jwtTokens'];
    if (parsedData.accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${parsedData.accessToken}`;
    }
    return config;
  });
};

const configResponseInterceptor = () => {
  axios.interceptors.response.use(
    (res: AxiosResponse) => res,
    (error: AxiosError<ErrorResponse>) => {
      const code = error.response?.data.code;
      if (!code?.startsWith('2')) return Promise.reject(error);

      cookie.remove(COOKIE_KEYS.TOKENS);
      return Promise.reject(error);
    },
  );
};
