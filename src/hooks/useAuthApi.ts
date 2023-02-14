import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { ErrorResponse } from '@src/apis';
import $userSession from '@src/recoil/userSession';

const useAuthApi = () => {
  const tokens = useRecoilValue($userSession);
  const router = useRouter();

  return async <T>(fetchCallback: () => Promise<T | undefined>) => {
    if (!tokens) {
      alert('로그인이 필요합니다!');
      await router.push('/login');
      return;
    }

    try {
      return await fetchCallback();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const code = error.response?.data.code;
      if (!code?.startsWith('2')) return;

      alert('로그인이 필요합니다!');
      await router.push('/login');
    }
  };
};

export default useAuthApi;
