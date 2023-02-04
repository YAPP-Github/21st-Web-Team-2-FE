import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentName from './ContentJob';

export default {
  title: 'onboarding/ContentJob',
  component: ContentName,
  args: {},
} as ComponentMeta<typeof ContentName>;

const Template: ComponentStory<typeof ContentName> = ({ ...args }) => <ContentName {...args} />;

export const Default = Template.bind({});
Default.args = {};
