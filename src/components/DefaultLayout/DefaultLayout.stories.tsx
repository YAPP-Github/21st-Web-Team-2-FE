import { ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultLayout from '.';

export default {
  component: DefaultLayout,
  title: 'Components/DefaultLayout',
};

const Template: ComponentStory<typeof DefaultLayout> = (args) => <DefaultLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  left: '왼쪽입니다.',
  main: '메인입니다.',
};
