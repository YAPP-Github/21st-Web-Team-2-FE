import { ComponentStory } from '@storybook/react';
import React from 'react';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'Components/topic/SelectOption',
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  option: {
    text: 'Text',
  },
};
