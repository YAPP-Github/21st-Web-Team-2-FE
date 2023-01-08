import { ComponentMeta, ComponentStory } from '@storybook/react';

import FabButton from './FabButton';

export default {
  title: 'Components/AddButton/FabButton',
  component: FabButton,
} as ComponentMeta<typeof FabButton>;

const Template: ComponentStory<typeof FabButton> = ({ ...args }) => <FabButton {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  visible: true,
};

export const hidden = Template.bind({});
hidden.args = {
  visible: false,
};
