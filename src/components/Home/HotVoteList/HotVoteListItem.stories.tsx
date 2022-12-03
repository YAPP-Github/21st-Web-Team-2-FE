import { ComponentStory } from '@storybook/react';
import React from 'react';

import HotVoteListItem from './HotVoteListItem';

export default {
  component: HotVoteListItem,
  title: 'Components/Home/HotVoteListItem',
};

const Template: ComponentStory<typeof HotVoteListItem> = (args) => <HotVoteListItem {...args} />;

const DEFAULT_HOT_VOTE = {
  badge: '참여율 TOP',
  title: '연협때 20% 질러봐도 될까요?',
  user: {
    profile: 'https://avatars.githubusercontent.com/u/45786387?v=4',
    nickname: '닉네임',
  },
  participants: 123,
  comments: 23,
};

export const Default = Template.bind({});
Default.args = {
  hotVote: DEFAULT_HOT_VOTE,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  hotVote: {
    ...DEFAULT_HOT_VOTE,
    title: '연협때 20% 질러봐도 될까요?연협때 20% 질러봐도 될까요?연협때 20% 질러봐도 될까요?',
  },
};
