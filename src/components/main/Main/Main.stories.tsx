import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TOPICS } from '@mocks/data/topic';

import Main from '.';

export default {
  title: 'main/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  popularTopics: TOPICS,
};
