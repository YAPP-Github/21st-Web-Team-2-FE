import { ComponentStory } from '@storybook/react';
import React from 'react';

import { MEMBER } from '@mocks/data/member';
import { VOTE_OPTION, VOTE_OPTIONS, VOTE_OPTION_WITH_CODE, VOTE_OPTION_WITH_IMAGE } from '@mocks/data/voteOption';

import PopularTopicCard from '.';

export default {
  component: PopularTopicCard,
  title: 'main/PopularTopicCard',
};

const Template: ComponentStory<typeof PopularTopicCard> = (args) => <PopularTopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  contents: 'contents',
  voteOptions: VOTE_OPTIONS,
  member: MEMBER,
  commentAmount: 0,
};

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  ...Default.args,
  voteOptions: [
    ...VOTE_OPTIONS,
    {
      ...VOTE_OPTION,
      voteOptionId: 4,
    },
  ],
};

export const FourOptions = Template.bind({});
FourOptions.args = {
  ...Default.args,
  voteOptions: [...VOTE_OPTIONS, { ...VOTE_OPTION, voteOptionId: 9 }, { ...VOTE_OPTION, voteOptionId: 4 }],
};

export const 이미지 = Template.bind({});
이미지.args = {
  ...Default.args,
  voteOptions: [VOTE_OPTION_WITH_IMAGE, { ...VOTE_OPTION_WITH_IMAGE, voteOptionId: 111 }],
};

export const 코드블록 = Template.bind({});
코드블록.args = {
  ...Default.args,
  voteOptions: [VOTE_OPTION_WITH_CODE, { ...VOTE_OPTION_WITH_CODE, voteOptionId: 99 }],
};
