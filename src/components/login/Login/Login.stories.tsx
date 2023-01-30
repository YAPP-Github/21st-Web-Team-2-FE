import { ComponentMeta, ComponentStory } from '@storybook/react';

import Login from './Login';

export default {
  title: 'login/Login',
  component: Login,
  args: {},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = ({ ...args }) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
