import React, { FC } from 'react';

import { Onboarding } from '@src/pages/onboarding';

import * as S from './ContentFinish.styles';

interface Props {
  onboardingValue: Onboarding;
}
const ContentFinish: FC<Props> = (props) => {
  const { onboardingValue } = props;

  const job = onboardingValue.job as string;
  return (
    <S.Wrapper>
      <S.JobIcon name={getJobName(job) ?? 'Developer'} size={80} />
      <S.Title>Hello {onboardingValue.name}!</S.Title>
      <S.Title>We are Thumbs UP</S.Title>
      <S.SubTitle>궁금한 토픽을 만들고 같이 이야기 나눠봐요!</S.SubTitle>
      <S.Button>시작하기</S.Button>
    </S.Wrapper>
  );
};

// GYU-TODO: any 타입 수정하기
const getJobName = (job: 'designer' | 'developer' | 'pm' | string) => {
  const jobObj: any = {
    designer: 'Designer',
    developer: 'Developer',
    pm: 'Pm',
  } as const;

  return jobObj[job] ?? 'Developer';
};

export default ContentFinish;
