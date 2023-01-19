import axios from 'axios';

// TODO-GYU: 배포시 실제 API 로 변경되는 로직 추가
export const BASE_URL = 'http://localhost:3000/api/v1';

export const initAxiosConfig = () => {
  axios.defaults.baseURL = BASE_URL ?? '';
};
