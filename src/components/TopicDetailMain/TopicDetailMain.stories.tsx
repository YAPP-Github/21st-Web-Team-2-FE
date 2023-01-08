import { ComponentMeta, ComponentStory } from '@storybook/react';
import { topic } from '__mocks__/data/topic';

import TopicDetailMain from './TopicDetailMain';

export default {
  title: 'Components/TopicDetailMain',
  component: TopicDetailMain,
  args: {},
} as ComponentMeta<typeof TopicDetailMain>;

const Template: ComponentStory<typeof TopicDetailMain> = ({ ...args }) => <TopicDetailMain {...args} />;

export const Default = Template.bind({});
Default.args = {
  topic: topic,
};
Default.decorators = [
  (Story, context) => (
    <div style={{ width: '857px' }}>
      <Story {...context.args} />
    </div>
  ),
];
