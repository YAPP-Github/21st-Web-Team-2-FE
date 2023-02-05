import React, { FC, ReactNode } from 'react';

import * as S from './OnboardingLayout.styles';

interface Props {
  title?: string;
  currentStep?: number;
  lastStep?: number;
  children: ReactNode;
}
const OnboardingLayout: FC<Props> = (props) => {
  const { title, currentStep, lastStep, children } = props;

  return (
    <S.Wrapper>
      <S.Header>
        <span>{title}</span>
        {currentStep && lastStep && (
          <div>
            {currentStep}/<S.LastCurrent>{lastStep}</S.LastCurrent>
          </div>
        )}
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default OnboardingLayout;
