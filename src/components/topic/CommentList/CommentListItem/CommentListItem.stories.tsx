import { ComponentMeta, ComponentStory } from '@storybook/react';

import { COMMENT, COMMENT_LIKED } from '@mocks/data/comment';

import CommentListItem from '.';

export default {
  title: 'topic/CommentList/CommentListItem',
  component: CommentListItem,
  args: {},
} as ComponentMeta<typeof CommentListItem>;

const Template: ComponentStory<typeof CommentListItem> = ({ ...args }) => <CommentListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: COMMENT,
};

export const 좋아요_선택 = Template.bind({});
좋아요_선택.args = {
  comment: COMMENT_LIKED,
};
