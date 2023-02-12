import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentYear from './ContentYear';

export default {
  title: 'onboarding/ContentYear',
  component: ContentYear,
  args: {},
} as ComponentMeta<typeof ContentYear>;

const Template: ComponentStory<typeof ContentYear> = ({ ...args }) => <ContentYear {...args} />;

export const Default = Template.bind({});
Default.args = {
  onboardingValue: {
    nickname: 'Typing',
    jobCategory: 'developer',
    workingYears: null,
  },
};
