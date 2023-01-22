import { ComponentStory } from '@storybook/react';
import React from 'react';

import Login from './login';

export default {
  component: Login,
  title: 'pages/Login',
};

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
