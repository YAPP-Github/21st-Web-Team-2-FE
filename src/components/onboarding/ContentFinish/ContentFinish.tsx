import { useRouter } from 'next/router';
import React, { FC } from 'react';

import ProfileImg from '@src/components/common/ProfileImg';
import { Onboarding } from '@src/pages/onboarding';
import { useSignup } from '@src/queires/useSignup';
import { JobCategory } from '@src/types/Member';

import * as S from './ContentFinish.styles';

interface Props {
  onboardingValue: Onboarding;
}
const ContentFinish: FC<Props> = (props) => {
  const { onboardingValue } = props;
  const router = useRouter();

  const { signup } = useSignup();
  const job = onboardingValue.job as JobCategory;

  const handleClickSignup = () => {
    const { job, name, year } = onboardingValue;

    if (job === null || name === null || year === null) return;
    signup(onboardingValue, {
      onSuccess: (data) => {
        // GYU-TODO: 실제 API 작업할때 해당 부분 수정
        // 현재 member 및 accessToken 부분 브랜치가 분리되어 있어
        // dev 머지 후 추후 step에 개발
        console.log('회원가입 완료', data);
        router.push('/');
      },
    });
  };

  return (
    <S.Wrapper>
      <ProfileImg jobCategory={job} />
      <S.Title>Hello {onboardingValue.name}!</S.Title>
      <S.Title>We are Thumbs UP</S.Title>
      <S.SubTitle>궁금한 토픽을 만들고 같이 이야기 나눠봐요!</S.SubTitle>
      <S.Button onClick={handleClickSignup}>시작하기</S.Button>
    </S.Wrapper>
  );
};

export default ContentFinish;
