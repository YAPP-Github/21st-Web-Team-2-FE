import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { ErrorResponse } from '@src/apis';
import $userSession from '@src/recoil/userSession';

const useAuthCheck = () => {
  const tokens = useRecoilValue($userSession);
  const router = useRouter();

  return async <T>(callback?: () => Promise<T>): Promise<T | boolean> => {
    if (!tokens) {
      alert('로그인이 필요합니다!');
      await router.push('/login');
      return false;
    }

    if (!callback) return true;

    try {
      return await callback();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const code = error.response?.data.code;
      if (!code?.startsWith('2')) throw error;

      alert('로그인이 필요합니다!');
      await router.push('/login');
      return false;
    }
  };
};

export default useAuthCheck;
