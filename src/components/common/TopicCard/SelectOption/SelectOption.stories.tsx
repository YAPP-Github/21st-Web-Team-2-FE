import { ComponentStory } from '@storybook/react';
import React from 'react';

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
