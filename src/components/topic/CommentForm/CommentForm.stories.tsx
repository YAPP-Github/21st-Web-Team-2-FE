import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommentForm from '.';

export default {
  title: 'Commons/CommentForm',
  component: CommentForm,
  parameters: {
    actions: {
      handles: ['submit'],
    },
  },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = ({ ...args }) => <CommentForm {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  placeholder: '유저님, 로그인하고 댓글을 남겨보세요! 💬',
  onSubmit: (value) => console.log('onSubmit 호출', value),
};

export const 라인수 = Template.bind({});
라인수.args = {
  placeholder: '라인수 10줄',
  onSubmit: (value) => console.log('onSubmit 호출', value),
  rows: 10,
};
