import axios, { AxiosRequestConfig } from 'axios';

import { Auth } from '@src/apis';
import { COOKIE_KEYS } from '@src/constants';
import cookie from '@src/utils/cookie';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};

export const interceptorsAxiosConfig = () => {
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
