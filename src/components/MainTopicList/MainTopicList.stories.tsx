import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '@src/components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const 기본 = Template.bind({});
기본.args = {};
