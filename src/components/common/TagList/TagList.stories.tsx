import { ComponentStory } from '@storybook/react';
import React from 'react';

import TagList from '.';

export default {
  component: TagList,
  title: 'Components/Common/TagList',
};

const Template: ComponentStory<typeof TagList> = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { value: 'React' },
    { value: 'Vue' },
    { value: '연봉' },
    { value: '인기태그' },
    { value: '조금은 길지도' },
    { value: 'React' },
  ],
};

export const WithWrapper = Template.bind({});
WithWrapper.args = {
  ...Default.args,
};
WithWrapper.decorators = [
  (Story, context) => (
    <div style={{ width: '200px' }}>
      <Story {...context.args} />
    </div>
  ),
];
