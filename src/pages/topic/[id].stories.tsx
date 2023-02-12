import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TOPIC_DETAIL } from '@mocks/data/topic';

import { localstorageKeys } from '@src/constants/localstorage';

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

export const 비로그인 = Template.bind({});
비로그인.args = {
  topicDetail: TOPIC_DETAIL,
};
비로그인.decorators = [
  (Story) => {
    localStorage.removeItem(localstorageKeys.user);
    return <Story />;
  },
];

export const 로그인 = Template.bind({});
로그인.args = {
  topicDetail: TOPIC_DETAIL,
};
로그인.decorators = [
  (Story) => {
    localStorage.setItem(localstorageKeys.user, JSON.stringify({ accessToken: 'token' }));
    return <Story />;
  },
];
