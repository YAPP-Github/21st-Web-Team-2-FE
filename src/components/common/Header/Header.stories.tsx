import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import $userSession from '@src/recoil/userSession';

import Header from '.';

export default {
  title: 'common/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const 기본 = Template.bind({});
기본.args = {};

export const 로그인 = Template.bind({});
로그인.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={({ set }) => {
        set($userSession, {
          accessToken: 'access-token',
          refreshToken: 'refresh-token',
        });
      }}
    >
      <Story />
    </RecoilRoot>
  ),
];
