import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentName from './ContentName';

export default {
  title: 'onboarding/ContentName',
  component: ContentName,
  args: {},
} as ComponentMeta<typeof ContentName>;

const Template: ComponentStory<typeof ContentName> = ({ ...args }) => <ContentName {...args} />;

export const Default = Template.bind({});
Default.args = {};
