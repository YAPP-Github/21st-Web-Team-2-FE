import { ComponentMeta, ComponentStory } from '@storybook/react';
import { commentArr } from '__mocks__/data/comment';

import CommentList from './CommentList';

export default {
  title: 'Components/CommentList/CommentList',
  component: CommentList,
  args: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = ({ ...args }) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: commentArr,
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};
