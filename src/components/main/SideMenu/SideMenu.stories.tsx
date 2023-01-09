import { ComponentStory } from '@storybook/react';
import React from 'react';

import SideMenu from '.';

export default {
  component: SideMenu,
  title: 'main/SideMenu',
};

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
