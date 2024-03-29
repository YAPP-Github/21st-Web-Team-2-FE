import { ComponentStory } from '@storybook/react';
import React from 'react';

import { MEMBER } from '@mocks/data/member';
import { TOPICS } from '@mocks/data/topic';

import TopicCarousel from '.';

export default {
  component: TopicCarousel,
  title: 'main/TopicCarousel',
};

const Template: ComponentStory<typeof TopicCarousel> = (args) => <TopicCarousel {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  topics: TOPICS,
};
