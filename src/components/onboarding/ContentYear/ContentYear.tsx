import React, { FC, useState } from 'react';

import { Onboarding, OnboardingKey } from '@src/pages/onboarding';

import * as S from './ContentYear.styles';
import YearSelector from './YearSelector';

interface Props {
  onboardingValue: Onboarding;
  onChangeOnboardingStep: (key: OnboardingKey, value: number) => void;
}
const ContentYear: FC<Props> = (props) => {
  const [year, setYear] = useState(1);

  const { onChangeOnboardingStep, onboardingValue } = props;
  const { nickname, jobCategory } = onboardingValue;
  return (
    <S.Wrapper>
      <S.Title>Hello {nickname}!</S.Title>
      <S.SubTitle>{changeJobLabel(jobCategory as keyof Job)}일을 한지 얼마나 되셨나요?</S.SubTitle>
      <S.YearSelectorWrapper>
        <YearSelector defaultValue={year} onChangeYear={setYear} />
      </S.YearSelectorWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={() => onChangeOnboardingStep('workingYears', year)}>다 했어요!</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

type Job = {
  designer: '디자인';
  developer: '개발';
  pm: '기획';
  [key: string]: string;
};

const changeJobLabel = (job: keyof Job) => {
  const jobObj: Job = {
    designer: '디자인',
    developer: '개발',
    pm: '기획',
  };

  return jobObj[job] ?? job;
};

export default ContentYear;
