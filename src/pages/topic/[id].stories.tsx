import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LOGGED_IN } from '@mocks/data/localStorage';
import { TOPIC_DETAIL } from '@mocks/data/topic';

import TopicDetail from './[id].page';

export default {
  title: 'pages/TopicDetail',
  component: TopicDetail,
  args: {},
} as ComponentMeta<typeof TopicDetail>;

const Template: ComponentStory<typeof TopicDetail> = ({ ...args }) => <TopicDetail {...args} />;
Template.parameters = {
  nextRouter: {
    path: '/topic/[id]',
    query: {
      id: '1',
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  topicDetail: TOPIC_DETAIL,
};

export const WithLogin = Template.bind({});
WithLogin.args = Default.args;
WithLogin.parameters = {
  ...Default.parameters,
  storage: LOGGED_IN,
};
