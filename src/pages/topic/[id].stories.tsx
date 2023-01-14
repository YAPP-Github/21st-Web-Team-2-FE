import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TOPIC_DETAIL } from '__mocks__/apis/handlers/topic';

import TopicDetail from './[id]';

export default {
  title: 'pages/TopicDetail',
  component: TopicDetail,
  args: {},
} as ComponentMeta<typeof TopicDetail>;

const Template: ComponentStory<typeof TopicDetail> = ({ ...args }) => <TopicDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  topicDetail: TOPIC_DETAIL,
};
Default.parameters = {
  nextRouter: {
    path: '/topic/[id]',
    query: {
      id: '1',
    },
  },
};
