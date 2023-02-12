import { ComponentStory } from '@storybook/react';
import React from 'react';

import WritePage from './index.page';

export default {
  component: WritePage,
  title: 'pages/Write',
};

const Template: ComponentStory<typeof WritePage> = (args) => <WritePage {...args} />;

export const Default = Template.bind({});
