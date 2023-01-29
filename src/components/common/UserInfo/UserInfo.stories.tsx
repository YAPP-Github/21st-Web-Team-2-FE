import { ComponentMeta, ComponentStory } from '@storybook/react';

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
};

export const full = Template.bind({});
full.args = {
  type: 'full',
};
