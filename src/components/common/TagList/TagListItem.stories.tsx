import { ComponentStory } from '@storybook/react';
import React from 'react';

import TagListItem from './TagListItem';

export default {
  component: TagListItem,
  title: 'Components/Common/TagListItem',
};

const Template: ComponentStory<typeof TagListItem> = (args) => <TagListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'React',
};
