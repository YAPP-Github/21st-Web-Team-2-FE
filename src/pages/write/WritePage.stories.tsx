import { ComponentStory } from '@storybook/react';
import React from 'react';

import { LOGGED_IN } from '@mocks/data/cookie';

import WritePage from './index.page';

export default {
  component: WritePage,
  title: 'pages/Write',
};

const Template: ComponentStory<typeof WritePage> = (args) => <WritePage {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  cookie: LOGGED_IN,
};

export const Without_Login = Template.bind({});
