import { ComponentStory } from '@storybook/react';
import React from 'react';

import { DEFAULT_HOT_VOTE } from '@mocks/data/hotVotes';

import HotVoteListItem from './HotVoteListItem';

export default {
  component: HotVoteListItem,
  title: 'Components/Home/HotVoteListItem',
};

const Template: ComponentStory<typeof HotVoteListItem> = (args) => <HotVoteListItem {...args} />;

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
