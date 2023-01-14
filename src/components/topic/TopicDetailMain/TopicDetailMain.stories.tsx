import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TOPIC } from '@mocks/data/topic';

import TopicDetailMain from '.';

export default {
  title: 'topic/TopicDetailMain',
  component: TopicDetailMain,
  args: {},
} as ComponentMeta<typeof TopicDetailMain>;

const Template: ComponentStory<typeof TopicDetailMain> = ({ ...args }) => <TopicDetailMain {...args} />;

export const Default = Template.bind({});
Default.args = {
  topic: TOPIC,
};
Default.decorators = [
  (Story, context) => (
    <div style={{ width: '857px' }}>
      <Story {...context.args} />
    </div>
  ),
];
