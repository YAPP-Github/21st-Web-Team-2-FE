import { ComponentStory } from '@storybook/react';
import React from 'react';

import { LOGGED_IN } from '@mocks/data/localStorage';
import { POPULAR_TOPICS } from '@mocks/data/topic';

import Home from './index.page';

export default {
  component: Home,
  title: 'pages/Home',
};

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  popularTopics: POPULAR_TOPICS,
};

export const WithLogin = Template.bind({});
WithLogin.args = Default.args;
WithLogin.parameters = {
  storage: LOGGED_IN,
};
