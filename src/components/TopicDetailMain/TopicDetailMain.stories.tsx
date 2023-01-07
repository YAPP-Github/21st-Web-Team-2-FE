import { ComponentMeta, ComponentStory } from '@storybook/react';
import { topic } from '__mocks__/data/topic';

import TopicDetailMain from './TopicDetailMain';

export default {
  title: 'PageComponents/TopicDetailMain',
  component: TopicDetailMain,
  args: {},
} as ComponentMeta<typeof TopicDetailMain>;

const Template: ComponentStory<typeof TopicDetailMain> = ({ ...args }) => <TopicDetailMain {...args} />;

export const Default = Template.bind({});
Default.args = {
  topic: topic,
};
