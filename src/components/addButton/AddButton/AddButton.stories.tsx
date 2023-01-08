import { ComponentMeta, ComponentStory } from '@storybook/react';

import AddButton from './AddButton';

export default {
  title: 'Components/AddButton/AddButton',
  component: AddButton,
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = ({ ...args }) => <AddButton {...args} />;

export const 기본 = Template.bind({});
기본.args = {};
