import { ComponentStory } from '@storybook/react';
import React from 'react';

import VoteListItem from './VoteListItem';

export default {
  component: VoteListItem,
  title: 'Components/Home/VoteListItem',
};

const Template: ComponentStory<typeof VoteListItem> = (args) => <VoteListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  badge: '참여율 TOP',
  title: '연협때 20% 질러봐도 될까요?',
  user: {
    profile: 'https://avatars.githubusercontent.com/u/45786387?v=4',
    nickname: '닉네임',
  },
  participants: 123,
  comments: 23,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...Default.args,
  title: '연협때 20% 질러봐도 될까요?연협때 20% 질러봐도 될까요?연협때 20% 질러봐도 될까요?',
};
