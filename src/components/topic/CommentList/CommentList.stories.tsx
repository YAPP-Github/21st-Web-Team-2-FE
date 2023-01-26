import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMMENTS } from '@mocks/data/comment';

import CommentList from '.';

export default {
  title: 'topic/CommentList',
  component: CommentList,
  args: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = ({ ...args }) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: COMMENTS,
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};
