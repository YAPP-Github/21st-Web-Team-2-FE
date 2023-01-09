import { ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultLayout from '.';

export default {
  component: DefaultLayout,
  title: 'common/DefaultLayout',
};

const Template: ComponentStory<typeof DefaultLayout> = (args) => <DefaultLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  side: '왼쪽입니다.',
  main: '메인입니다.',
};
