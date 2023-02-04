import { ComponentStory } from '@storybook/react';
import React from 'react';

import ImgSelector from '.';

export default {
  component: ImgSelector,
  title: 'common/ImgSelector',
};

const Template: ComponentStory<typeof ImgSelector> = (args) => <ImgSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Here',
};
