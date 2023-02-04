import { NextPage } from 'next';
import { useState } from 'react';

import SingleContentLayout from '@src/components/common/SingleContentLayout';
import ContentFinish from '@src/components/onboarding/ContentFinish';
import ContentJob from '@src/components/onboarding/ContentJob';
import ContentName from '@src/components/onboarding/ContentName';
import ContentYear from '@src/components/onboarding/ContentYear';
import OnboardingLayout from '@src/components/onboarding/OnboardingLayout';

const LAST_STEP = 3;
const initialState: Onboarding = {
  name: null,
  job: null,
  year: null,
};
export interface Onboarding {
  name: string | null;
  job: string | null;
  year: number | null;
}

export type OnboardingKey = keyof Onboarding;

const Onboarding: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingValue, setOnboardingValue] = useState<Onboarding>(initialState);

  const handleChangeOnboarding = (key: OnboardingKey, newValue: string | number) => {
    setOnboardingValue((prev) => ({
      ...prev,
      [key]: newValue,
    }));

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <SingleContentLayout>
      <OnboardingLayout
        currentStep={currentStep > 3 ? undefined : currentStep}
        lastStep={LAST_STEP}
        title={getTitle(currentStep)}
      >
        {getContent(currentStep, handleChangeOnboarding, onboardingValue)}
      </OnboardingLayout>
    </SingleContentLayout>
  );
};

const getTitle = (currentStep: number) => {
  if (currentStep === 1) return '1. 닉네임 설정';
  if (currentStep === 2) return '2. 직군 설정';
  if (currentStep === 3) return '3. 연차 설정';

  return undefined;
};

const getContent = (
  currentStep: number,
  handleChangeOnboarding: (key: keyof Onboarding, newValue: string | number) => void,
  onboardingValue: Onboarding,
) => {
  if (currentStep === 1) return <ContentName onChangeOnboardingStep={handleChangeOnboarding} />;
  if (currentStep === 2)
    return <ContentJob onChangeOnboardingStep={handleChangeOnboarding} onboardingValue={onboardingValue} />;
  if (currentStep === 3)
    return <ContentYear onChangeOnboardingStep={handleChangeOnboarding} onboardingValue={onboardingValue} />;
  if (currentStep >= 4) return <ContentFinish onboardingValue={onboardingValue} />;
};

export default Onboarding;
