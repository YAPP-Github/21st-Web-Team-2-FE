import { ComponentMeta, ComponentStory } from '@storybook/react';

import TopicDetail from './[id]';

export default {
  title: 'pages/TopicDetail',
  component: TopicDetail,
  args: {},
} as ComponentMeta<typeof TopicDetail>;

const Template: ComponentStory<typeof TopicDetail> = ({ ...args }) => <TopicDetail {...args} />;

export const Default = Template.bind({});
Default.args = {};
