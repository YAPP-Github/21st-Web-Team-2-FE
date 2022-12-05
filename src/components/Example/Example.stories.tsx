import { ComponentStory } from '@storybook/react';
import React from 'react';

import Example from '.';

export default {
  component: Example,
  title: 'Components/Example',
};

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Word',
};
