import { ComponentMeta, ComponentStory } from '@storybook/react';

import OnboardingLayout from './OnboardingLayout';

export default {
  title: 'onboarding/OnboardingLayout',
  component: OnboardingLayout,
  args: {},
} as ComponentMeta<typeof OnboardingLayout>;

const Template: ComponentStory<typeof OnboardingLayout> = ({ ...args }) => <OnboardingLayout {...args} />;

export const ONE_닉네임설정 = Template.bind({});
ONE_닉네임설정.args = {
  title: '1. 닉네임 설정',
  currentStep: 1,
  lastStep: 3,
};
export const TWO_직군설정 = Template.bind({});
TWO_직군설정.args = {
  title: '2. 직군 설정',
  currentStep: 2,
  lastStep: 3,
};
export const THREE_연차설정 = Template.bind({});
THREE_연차설정.args = {
  title: '3. 연차 설정',
  currentStep: 3,
  lastStep: 3,
};
