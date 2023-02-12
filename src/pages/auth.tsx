import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import LoadingSpinner from '@src/components/common/LoadingSpinner';
import { useSignin } from '@src/queires/useSignin';
import $userSession from '@src/recoil/userSession';

const Auth = () => {
  const router = useRouter();
  const setUserSession = useSetRecoilState($userSession);
  const { signin } = useSignin();

  const code = router.query.code as string;

  useEffect(() => {
    if (!code) return;

    signin(code, {
      onSuccess: (result) => {
        if (result?.isMember === true) {
          setUserSession(result.jwtTokens);
          router.push('/');
        } else {
          router.push(`/onboarding?code=${result?.jwtTokens.accessToken}`, '/onboarding');
        }
      },
      onError: (error) => {
        // GYU-TODO: 로그인 실패인 경우 UI 구현해야함!
        console.log('error handling', error);
      },
    });
  }, [code, router, setUserSession, signin]);

  return <LoadingSpinner />;
};

export default Auth;
