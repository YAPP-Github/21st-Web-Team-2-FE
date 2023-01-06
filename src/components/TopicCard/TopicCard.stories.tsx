import { ComponentStory } from '@storybook/react';
import React from 'react';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'Components/topic/TopicCard',
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  contents: 'contents',
  options: [
    { id: 0, text: 'text' },
    { id: 1, text: 'text' },
  ],
  member: {
    jobCategory: '개발자',
    nickname: '닉네임',
    profileImage: '',
  },
  participation: 0,
  comments: 0,
};

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  ...Default.args,
  options: [
    { id: 0, text: 'text' },
    { id: 1, text: 'text' },
    { id: 2, text: 'text' },
  ],
};

export const FourOptions = Template.bind({});
FourOptions.args = {
  ...Default.args,
  options: [
    { id: 0, text: 'text' },
    { id: 1, text: 'text' },
    { id: 2, text: 'text' },
    { id: 3, text: 'text' },
  ],
};
