import { ComponentStory } from '@storybook/react';
import React from 'react';

import Home from './index.page';

export default {
  component: Home,
  title: 'page/Home',
};

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
