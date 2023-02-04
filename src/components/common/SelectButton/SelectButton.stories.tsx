import { ComponentMeta, ComponentStory } from '@storybook/react';

import SelectButton from '.';

export default {
  title: 'common/SelectButton',
  component: SelectButton,
  argTypes: {},
} as ComponentMeta<typeof SelectButton>;

const Template: ComponentStory<typeof SelectButton> = (args) => <SelectButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'text',
};

export const Selected = Template.bind({});
Selected.args = {
  children: 'text',
  $selected: true,
};
