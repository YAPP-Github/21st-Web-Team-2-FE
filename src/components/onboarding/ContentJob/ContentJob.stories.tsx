import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentJob from './ContentJob';

export default {
  title: 'onboarding/ContentJob',
  component: ContentJob,
  args: {},
} as ComponentMeta<typeof ContentJob>;

const Template: ComponentStory<typeof ContentJob> = ({ ...args }) => <ContentJob {...args} />;

export const Default = Template.bind({});
Default.args = {
  onboardingValue: {
    name: 'Typing',
    job: null,
    year: null,
  },
};
