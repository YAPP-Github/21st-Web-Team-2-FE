import { ComponentStory } from '@storybook/react';
import React from 'react';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'common/TopicCard',
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  contents: 'contents',
  options: [
    { id: 0, text: 'text', voters: 0 },
    { id: 1, text: 'text', voters: 0 },
  ],
  member: {
    jobCategory: '개발자',
    nickname: '닉네임',
    profileImage: 'https://avatars.githubusercontent.com/u/45786387?v=4',
  },
  comments: 0,
  type: 'feed',
};

export const 글자수_많음_2개 = Template.bind({});
글자수_많음_2개.args = {
  ...Default.args,
  options: [
    { id: 0, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voters: 10 },
    { id: 1, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voters: 20 },
  ],
};

export const 글자수_많음_3개 = Template.bind({});
글자수_많음_3개.args = {
  ...Default.args,
  options: [
    { id: 0, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voters: 10 },
    { id: 1, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voters: 10 },
    { id: 2, text: '일이삼사오육칠팔구십일이삼사오육칠팔구십', voters: 30 },
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

export const ThreeOptions = Template.bind({});
ThreeOptions.args = {
  ...Default.args,
  options: [
    { id: 0, text: 'text', voters: 10 },
    { id: 1, text: 'text', voters: 20 },
    { id: 2, text: 'text', voters: 4 },
  ],
};

export const FourOptions = Template.bind({});
FourOptions.args = {
  ...Default.args,
  options: [
    { id: 0, text: 'text', voters: 10 },
    { id: 1, text: 'text', voters: 2 },
    { id: 2, text: 'text', voters: 34 },
    { id: 3, text: 'text', voters: 3 },
  ],
};
