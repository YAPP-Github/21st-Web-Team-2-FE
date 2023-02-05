import { ComponentStory } from '@storybook/react';
import React from 'react';

import { CODE_BLOCK } from '@mocks/data/voteOption';

import CodeEditor from '.';

export default {
  component: CodeEditor,
  title: 'common/CodeEditor',
};

const Template: ComponentStory<typeof CodeEditor> = (args) => <CodeEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  language: 'javascript',
  value: CODE_BLOCK as string,
  disabled: false,
};
