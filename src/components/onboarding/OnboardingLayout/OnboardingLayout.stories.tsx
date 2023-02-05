import { ComponentMeta, ComponentStory } from '@storybook/react';

import OnboardingLayout from './OnboardingLayout';

export default {
  title: 'onboarding/OnboardingLayout',
  component: OnboardingLayout,
  args: {},
} as ComponentMeta<typeof OnboardingLayout>;

const Template: ComponentStory<typeof OnboardingLayout> = ({ ...args }) => <OnboardingLayout {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  title: '1. 닉네임 설정',
  currentStep: 1,
  lastStep: 3,
  children: <div>children</div>,
};

export const 컨텐츠만 = Template.bind({});
컨텐츠만.args = {
  children: <div>children</div>,
};
