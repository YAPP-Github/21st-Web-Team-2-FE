import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfileImg from '.';

export default {
  title: 'common/ProfileImg',
  component: ProfileImg,
  argTypes: {},
} as ComponentMeta<typeof ProfileImg>;

const Template: ComponentStory<typeof ProfileImg> = (args) => <ProfileImg {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  size: 80,
  jobCategory: '디자인',
};

export const 기타 = Template.bind({});
기타.args = {
  size: 80,
  jobCategory: 'superman',
};

export const 이미지 = Template.bind({});
이미지.args = {
  size: 80,
  src: 'https://avatars.githubusercontent.com/u/45786387?v=4',
  jobCategory: '디자인',
};
