import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TOPIC } from '@mocks/data/topic';

import TopicDetail from './[id]';

export default {
  title: 'pages/TopicDetail',
  component: TopicDetail,
  args: {},
} as ComponentMeta<typeof TopicDetail>;

const Template: ComponentStory<typeof TopicDetail> = ({ ...args }) => <TopicDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  topicDetail: TOPIC,
};
Default.parameters = {
  nextRouter: {
    path: '/topic/[id]',
    query: {
      id: '1',
    },
  },
};
