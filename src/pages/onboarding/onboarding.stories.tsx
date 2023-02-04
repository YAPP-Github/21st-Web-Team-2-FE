import { ComponentStory } from '@storybook/react';
import React from 'react';

import Onboarding from './';

export default {
  component: Onboarding,
  title: 'pages/Onboarding',
};

const Template: ComponentStory<typeof Onboarding> = (args) => <Onboarding {...args} />;

export const Default = Template.bind({});
