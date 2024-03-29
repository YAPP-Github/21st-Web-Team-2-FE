import { ComponentStory } from '@storybook/react';
import React from 'react';

import { LOGGED_IN } from '@mocks/data/cookie';
import { MEMBER } from '@mocks/data/member';
import {
  VOTE_OPTION,
  VOTE_OPTION2,
  VOTE_OPTIONS,
  VOTE_OPTION_WITH_CODE,
  VOTE_OPTION_WITH_IMAGE,
  VOTE_OPTION_WITH_SHORT_CODE,
} from '@mocks/data/voteOption';

import { COOKIE_KEYS } from '@src/constants';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'common/TopicCard',
  parameters: {
    cookie: LOGGED_IN,
  },
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  topicId: 1,
  title: 'Title',
  contents: 'contents',
  voteOptions: VOTE_OPTIONS,
  member: MEMBER,
  commentAmount: 0,
  type: 'feed',
};

export const WithoutLogin = Template.bind({});
WithoutLogin.args = Default.args;
WithoutLogin.parameters = {
  cookie: { [COOKIE_KEYS.TOKENS]: null },
};

export const 글자수_많음_2개 = Template.bind({});
글자수_많음_2개.args = {
  ...Default.args,
  voteOptions: [
    { ...VOTE_OPTION, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voteAmount: 20 },
    { ...VOTE_OPTION2, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voteAmount: 10 },
  ],
};

export const 글자수_많음_3개 = Template.bind({});
글자수_많음_3개.args = {
  ...Default.args,
  voteOptions: [
    { ...VOTE_OPTION, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voteAmount: 20 },
    { ...VOTE_OPTION2, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voteAmount: 10 },
    { ...VOTE_OPTION2, voteOptionId: 3, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voteAmount: 30 },
  ],
};

export const Badge = Template.bind({});
Badge.args = {
  ...Default.args,
  badge: 'badge',
};

export const Detail = Template.bind({});
Detail.args = {
  ...Default.args,
  type: 'detail',
};

export const DetailLiked = Template.bind({});
DetailLiked.args = {
  ...Default.args,
  type: 'detail',
  liked: true,
  likeAmount: 1,
};

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  ...Default.args,
  voteOptions: [
    ...VOTE_OPTIONS,
    {
      ...VOTE_OPTION,
      voteOptionId: 3,
    },
  ],
};

export const FourOptions = Template.bind({});
FourOptions.args = {
  ...Default.args,
  voteOptions: [...VOTE_OPTIONS, { ...VOTE_OPTION, voteOptionId: 3 }, { ...VOTE_OPTION, voteOptionId: 4 }],
};

export const 이미지 = Template.bind({});
이미지.args = {
  ...Default.args,
  voteOptions: [VOTE_OPTION_WITH_IMAGE, { ...VOTE_OPTION_WITH_IMAGE, voteOptionId: 99 }],
};

export const 코드블록 = Template.bind({});
코드블록.args = {
  ...Default.args,
  voteOptions: [VOTE_OPTION_WITH_CODE, { ...VOTE_OPTION_WITH_CODE, voteOptionId: 99 }],
};

export const 비율_틀린_코드블록 = Template.bind({});
비율_틀린_코드블록.args = {
  ...Default.args,
  voteOptions: [VOTE_OPTION_WITH_CODE, VOTE_OPTION_WITH_SHORT_CODE],
};

export const 상세_코드블록 = Template.bind({});
상세_코드블록.args = {
  ...코드블록.args,
  type: 'detail',
};

export const 비율_틀린_상세_코드블록 = Template.bind({});
비율_틀린_상세_코드블록.args = {
  ...Default.args,
  voteOptions: [VOTE_OPTION_WITH_CODE, VOTE_OPTION_WITH_SHORT_CODE],
  type: 'detail',
};
