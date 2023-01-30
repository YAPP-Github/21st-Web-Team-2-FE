import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserMenu from './UserMenu';

export default {
  title: 'common/UserMenu',
  component: UserMenu,
  args: {},
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = ({ ...args }) => <UserMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
