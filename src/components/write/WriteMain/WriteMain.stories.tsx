import { ComponentStory } from '@storybook/react';
import React from 'react';

import WriteMain from './index';

export default {
  component: WriteMain,
  title: 'write/WriteMain',
};

const Template: ComponentStory<typeof WriteMain> = (args) => <WriteMain {...args} />;

export const Default = Template.bind({});
