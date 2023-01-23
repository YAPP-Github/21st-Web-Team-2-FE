import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MEMBER } from '@mocks/data/member';

import TopicUserInfo from '.';

export default {
  title: 'topic/TopicUserInfo',
  component: TopicUserInfo,
  args: {},
} as ComponentMeta<typeof TopicUserInfo>;

const Template: ComponentStory<typeof TopicUserInfo> = ({ ...args }) => <TopicUserInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  member: MEMBER,
  tags: ['React', 'Vue', '연봉', '인기태그', '태그5'],
};
