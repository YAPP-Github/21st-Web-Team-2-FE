import { ComponentStory } from '@storybook/react';
import React from 'react';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'Components/TopicCard',
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  topic: {
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
    participations: 0,
    comments: 0,
  },
};
