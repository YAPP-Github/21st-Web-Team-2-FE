import { ComponentStory } from '@storybook/react';
import React from 'react';

import SingleContentLayout from '.';

export default {
  component: SingleContentLayout,
  title: 'common/SingleContentLayout',
};

const Template: ComponentStory<typeof SingleContentLayout> = (args) => <SingleContentLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '컨텐츠',
};
