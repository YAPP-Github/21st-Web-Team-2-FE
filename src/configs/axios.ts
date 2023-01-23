import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};
