import React, { FC } from 'react';

import { Onboarding } from '@src/pages/onboarding';

import * as S from './ContentFinish.styles';

// GYU-TODO: 설정한 닉네임 설정해야함!
interface Props {
  onboardingValue: Onboarding;
}
const ContentFinish: FC<Props> = (props) => {
  const { onboardingValue } = props;

  return (
    <S.Wrapper>
      <S.JobIcon name={getJobName('developer')} size={80} />
      <S.Title>Hello Typing!</S.Title>
      <S.Title>We are Thumbs UP</S.Title>
      <S.SubTitle>궁금한 토픽을 만들고 같이 이야기 나눠봐요!</S.SubTitle>
      <S.Button>시작하기</S.Button>
    </S.Wrapper>
  );
};

const getJobName = (job: 'designer' | 'developer' | 'pm') => {
  const jobObj = {
    designer: 'Designer',
    developer: 'Developer',
    pm: 'Pm',
  } as const;

  return jobObj[job];
};

export default ContentFinish;
