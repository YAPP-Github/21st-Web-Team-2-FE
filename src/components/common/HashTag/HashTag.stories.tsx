import { ComponentStory } from '@storybook/react';
import React from 'react';

import HashTag from './index';

export default {
  component: HashTag,
  title: 'Components/Common/HashTag',
};

const Template: ComponentStory<typeof HashTag> = (args) => <HashTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'React',
};
