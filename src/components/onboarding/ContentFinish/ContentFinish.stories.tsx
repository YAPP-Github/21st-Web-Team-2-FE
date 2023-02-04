import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentFinish from './ContentFinish';

export default {
  title: 'onboarding/ContentFinish',
  component: ContentFinish,
  args: {},
} as ComponentMeta<typeof ContentFinish>;

const Template: ComponentStory<typeof ContentFinish> = ({ ...args }) => <ContentFinish {...args} />;

export const Default = Template.bind({});
Default.args = {};
