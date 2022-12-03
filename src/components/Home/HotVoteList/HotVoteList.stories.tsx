import { ComponentStory } from '@storybook/react';
import React from 'react';

import { DEFAULT_HOT_VOTE } from '@mocks/data/hotVotes';

import HotVoteList from '.';

export default {
  component: HotVoteList,
  title: 'Components/Home/HotVoteList',
};

const Template: ComponentStory<typeof HotVoteList> = (args) => <HotVoteList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '이번 주 인기 토픽',
  hotVotes: [DEFAULT_HOT_VOTE, DEFAULT_HOT_VOTE, DEFAULT_HOT_VOTE],
};
