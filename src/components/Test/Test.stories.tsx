import { ComponentStory } from '@storybook/react';
import React from 'react';

import Test from '.';

export default {
  component: Test,
  title: 'page/Test',
};

const Template: ComponentStory<typeof Test> = () => <Test />;

export const Default = Template.bind({});
