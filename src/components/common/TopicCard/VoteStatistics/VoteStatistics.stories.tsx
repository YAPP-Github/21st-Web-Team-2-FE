import { ComponentStory } from '@storybook/react';
import React from 'react';

import { LOGGED_IN } from '@mocks/data/cookie';

import VoteStatistics from '.';

export default {
  component: VoteStatistics,
  title: 'common/TopicCard/VoteStatistics',
  parameters: {
    cookie: LOGGED_IN,
  },
};

const Template: ComponentStory<typeof VoteStatistics> = (args) => <VoteStatistics {...args} />;

export const Default = Template.bind({});
Default.args = {
  statistics: {
    developerVoteAmount: 1,
    designerVoteAmount: 0,
    pmVoteAmount: 0,
    etcVoteAmount: 0,
  },
};
