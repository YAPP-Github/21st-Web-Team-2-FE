import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MEMBER } from '@mocks/data/member';

import UserInfo from './UserInfo';

export default {
  title: 'common/UserInfo',
  component: UserInfo,
  args: {},
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = ({ ...args }) => <UserInfo {...args} />;

export const simple = Template.bind({});
simple.args = {
  type: 'simple',
  member: MEMBER,
};

export const full = Template.bind({});
full.args = {
  type: 'full',
  member: MEMBER,
};
