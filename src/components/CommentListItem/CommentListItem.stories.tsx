import { ComponentMeta, ComponentStory } from '@storybook/react';
import { commentArr } from '__mocks__/data/comment';

import CommentListItem from './CommentListItem';

export default {
  title: 'Components/CommentListItem',
  component: CommentListItem,
  args: {},
} as ComponentMeta<typeof CommentListItem>;

const Template: ComponentStory<typeof CommentListItem> = ({ ...args }) => <CommentListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: commentArr[0],
};
