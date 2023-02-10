import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'common/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: { color: { control: { type: 'color', presetColors: ['red', 'green'] } } },
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = ({ ...args }) => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#D2FA64',
  size: 50,
};
