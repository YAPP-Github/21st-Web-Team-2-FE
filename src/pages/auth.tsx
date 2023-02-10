import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

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
    });
  }, [code, router, setUserSession, signin]);
};

export default Auth;
