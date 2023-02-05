import { ComponentStory } from '@storybook/react';
import React from 'react';

import ImgSelector from '.';

export default {
  component: ImgSelector,
  title: 'common/ImgSelector',
};

const Template: ComponentStory<typeof ImgSelector> = (args) => (
  <div style={{ backgroundColor: 'white' }}>
    <ImgSelector {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Here',
};
