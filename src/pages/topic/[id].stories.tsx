import { ComponentMeta, ComponentStory } from '@storybook/react';
import { topic } from '__mocks__/data/topic';

import TopicDetail from './[id]';

export default {
  title: 'Page/TopicDetail',
  component: TopicDetail,
  args: {},
} as ComponentMeta<typeof TopicDetail>;

const Template: ComponentStory<typeof TopicDetail> = ({ ...args }) => <TopicDetail {...args} />;

export const Default = Template.bind({});
Default.args = {};
