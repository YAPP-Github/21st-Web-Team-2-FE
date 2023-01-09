import { ComponentStory } from '@storybook/react';
import React from 'react';

import SideMenuItem from '.';

export default {
  component: SideMenuItem,
  title: 'Components/SideMenu/SideMenuItem',
};

const Template: ComponentStory<typeof SideMenuItem> = (args) => <SideMenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'text',
};

export const Icon = Template.bind({});
Icon.args = {
  text: '추천',
  icon: 'ThumbsUp',
};

export const Selected = Template.bind({});
Selected.args = {
  text: 'text',
  selected: true,
};
