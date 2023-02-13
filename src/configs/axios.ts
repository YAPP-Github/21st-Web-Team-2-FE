import axios, { AxiosRequestConfig } from 'axios';

import { Auth, refreshToken } from '@src/apis';
import { localstorageKeys } from '@src/constants/localstorage';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};

export const interceptorsAxiosConfig = () => {
  axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
    const user = localStorage.getItem(localstorageKeys.user);

    if (!user) return config;

    const parsedData = JSON.parse(user) as Auth['jwtTokens'];
    if (parsedData.accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${parsedData.accessToken}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    (res) => res,
    async (err) => {
      const { config, response } = err;
      const code = response.data.code;

      if (Number(code) !== 2002) {
        return Promise.reject(err);
      }

      config.sent = true;
      const jwtTokens = await refreshToken();
      if (!jwtTokens) {
        localStorage.removeItem(localstorageKeys.user);
        return Promise.reject(err);
      }
      localStorage.setItem(localstorageKeys.user, JSON.stringify(jwtTokens));

      return axios(config);
    },
  );
};
