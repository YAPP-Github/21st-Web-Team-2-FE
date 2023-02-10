import axios, { AxiosRequestConfig } from 'axios';

import { Auth } from '@src/apis';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};

export const interceptorsAxiosConfig = () => {
  axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
    const user = localStorage.getItem('user');

    if (!user) return config;

    const parsedData = JSON.parse(user) as Auth['jwtTokens'];
    if (parsedData.accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${parsedData.accessToken}`;
    }
    return config;
  });
};
