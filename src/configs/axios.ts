import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/api/v1';

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};
