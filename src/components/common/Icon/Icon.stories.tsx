import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '.';

export default {
  title: 'common/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'number', name: 'size(px)' },
    width: { control: 'text', name: 'width(px)' },
    height: { control: 'text', name: 'height(px)' },
  },
  args: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ ...args }) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'ArrowDown',
};

export const 사이즈_컬러 = Template.bind({});
사이즈_컬러.args = {
  name: 'ArrowDown',
  size: 50,
  color: 'Primary1',
};
