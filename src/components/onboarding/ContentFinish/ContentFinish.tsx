import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';

import ProfileImg from '@src/components/common/ProfileImg';
import { Onboarding } from '@src/pages/onboarding/index.page';
import { useSignup } from '@src/queires/useSignup';
import $userSession from '@src/recoil/userSession';

import * as S from './ContentFinish.styles';

interface Props {
  onboardingValue: Onboarding;
}
const ContentFinish: FC<Props> = (props) => {
  const { onboardingValue } = props;
  const router = useRouter();
  const code = router.query.code as string;

  const { signup } = useSignup(code);
  const job = onboardingValue.jobCategory as string;
  const setUserSession = useSetRecoilState($userSession);

  const handleClickSignup = () => {
    const { jobCategory, nickname, workingYears } = onboardingValue;

    if (jobCategory === null || nickname === null || workingYears === null) return;
    signup(onboardingValue, {
      onSuccess: (data) => {
        setUserSession(data);
        router.push('/');
      },
    });
  };

  return (
    <S.Wrapper>
      <ProfileImg jobCategory={job} size={80} />
      <S.Title>Hello {onboardingValue.nickname}!</S.Title>
      <S.Title>We are Thumbs UP</S.Title>
      <S.SubTitle>궁금한 토픽을 만들고 같이 이야기 나눠봐요!</S.SubTitle>
      <S.Button onClick={handleClickSignup}>시작하기</S.Button>
    </S.Wrapper>
  );
};

export default ContentFinish;
