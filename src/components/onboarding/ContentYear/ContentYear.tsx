import React, { FC, useState } from 'react';

import { Onboarding } from '@src/pages/onboarding';

import * as S from './ContentYear.styles';
import YearSelector from './YearSelector';

interface Props {
  onboardingValue: Onboarding;
  onChangeOnboardingStep: (key: 'name' | 'job' | 'year', value: number) => void;
}
const ContentYear: FC<Props> = (props) => {
  const [year, setYear] = useState(1);

  const { onChangeOnboardingStep, onboardingValue } = props;
  const { name, job } = onboardingValue;
  return (
    <S.Wrapper>
      <S.Title>Hello {name}!</S.Title>
      <S.SubTitle>{job}일을 한지 얼마나 되셨나요?</S.SubTitle>
      <S.YearSelectorWrapper>
        <YearSelector defaultValue={year} onChangeYear={setYear} />
      </S.YearSelectorWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={() => onChangeOnboardingStep('year', year)}>다 했어요!</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default ContentYear;
