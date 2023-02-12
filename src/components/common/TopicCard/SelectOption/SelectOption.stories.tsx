import { ComponentStory } from '@storybook/react';
import React from 'react';

import { TEST_IMAGE } from '@mocks/data/image';
import { CODE_BLOCK, SHORT_CODE_BLOCK } from '@mocks/data/voteOption';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'common/TopicCard/SelectOption',
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Text',
};

export const 선택한_결과 = Template.bind({});
선택한_결과.args = {
  text: 'Text',
  rate: 0.86,
  result: true,
  selected: true,
};

export const 선택안된_결과 = Template.bind({});
선택안된_결과.args = {
  text: 'Text',
  rate: 0.24,
  result: true,
};

export const 이미지 = Template.bind({});
이미지.args = {
  ...Default.args,
  image: TEST_IMAGE,
};

export const 코드블록 = Template.bind({});
코드블록.args = {
  ...Default.args,
  codeBlock: CODE_BLOCK,
};

export const 짧은_코드블록 = Template.bind({});
짧은_코드블록.args = {
  ...Default.args,
  codeBlock: SHORT_CODE_BLOCK,
};
