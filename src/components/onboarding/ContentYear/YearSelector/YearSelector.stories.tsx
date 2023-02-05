import { ComponentMeta, ComponentStory } from '@storybook/react';

import YearSelector from './YearSelector';

// GYU-TODO:  common 성으로 뺄 수도?
export default {
  title: 'onboarding/ContentYear/YearSelector',
  component: YearSelector,
  args: {},
} as ComponentMeta<typeof YearSelector>;

const Template: ComponentStory<typeof YearSelector> = ({ ...args }) => <YearSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};
