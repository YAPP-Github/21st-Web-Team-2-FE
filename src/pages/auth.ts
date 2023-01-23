import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { signin } from '@src/apis';
import $userSession from '@src/recoil/userSession';

const Auth = () => {
  const router = useRouter();
  const setUserSession = useSetRecoilState($userSession);

  const code = router.query.code as string;

  useEffect(() => {
    if (!code) return;

    const googleOauth = async () => {
      const result = await signin(code);

      // 에러 인 경우
      if (!result) return;

      if (result.isMember === true) {
        // 이미 가입된 유저로 홈으로 이동
        // 로그인 성공
        // user 상태 관리!
        setUserSession(result);

        router.push('/');
      } else {
        // onboarding 으로 이동
        // router.push('/onboardin');
      }
    };

    googleOauth();
  }, [code, router, setUserSession]);
};

export default Auth;
