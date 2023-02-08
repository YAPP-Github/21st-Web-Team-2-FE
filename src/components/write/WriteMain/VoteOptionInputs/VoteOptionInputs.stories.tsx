import { ComponentStory } from '@storybook/react';
import React from 'react';

import VoteOptionInputs from '.';

export default {
  component: VoteOptionInputs,
  title: 'write/VoteOptionInputs',
};

const Template: ComponentStory<typeof VoteOptionInputs> = (args) => <VoteOptionInputs {...args} />;

export const Default = Template.bind({});
