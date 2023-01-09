import { ComponentMeta, ComponentStory } from '@storybook/react';

import { commentArr } from '@mocks/data/comment';

import CommentListItem from '.';

export default {
  title: 'topic/CommentList/CommentListItem',
  component: CommentListItem,
  args: {},
} as ComponentMeta<typeof CommentListItem>;

const Template: ComponentStory<typeof CommentListItem> = ({ ...args }) => <CommentListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: commentArr[0],
};

export const 좋아요_미선택 = Template.bind({});
좋아요_미선택.args = {
  comment: commentArr[1],
};
