import React, { FC } from 'react';

import * as S from './OnboardingLayout.styles';

interface Props {
  title: string;
  currentStep: number;
  lastStep: number;
}
const OnboardingLayout: FC<Props> = (props) => {
  const { title, currentStep, lastStep } = props;

  return (
    <S.Wrapper>
      <S.Header>
        <span>{title}</span>
        <div>
          {currentStep}/<S.LastCurrent>{lastStep}</S.LastCurrent>
        </div>
      </S.Header>
      <S.Content></S.Content>
    </S.Wrapper>
  );
};

export default OnboardingLayout;
