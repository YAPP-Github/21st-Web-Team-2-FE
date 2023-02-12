import { ComponentStory } from '@storybook/react';
import React from 'react';

import Onboarding from './index.page';

export default {
  component: Onboarding,
  title: 'pages/Onboarding',
};

const Template: ComponentStory<typeof Onboarding> = (args) => <Onboarding {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. 닉네임 설정',
  currentStep: 1,
  lastStep: 3,
  children: <div>children</div>,
};
