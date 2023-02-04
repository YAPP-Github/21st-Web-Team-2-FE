import { ComponentStory } from '@storybook/react';
import React from 'react';

import { POPULAR_TOPICS } from '@mocks/data/topic';

import Home from '.';

export default {
  component: Home,
  title: 'pages/Home',
};

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  popularTopics: POPULAR_TOPICS,
};
