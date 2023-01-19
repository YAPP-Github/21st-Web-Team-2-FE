import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import TextArea from '.';

export default {
  title: 'common/TextArea',
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return <TextArea {...args} value={value} onChange={handleChange} />;
};

export const 기본 = Template.bind({});
기본.args = {
  placeholder: 'placeholder',
};

export const 카운트 = Template.bind({});
카운트.args = {
  placeholder: 'placeholder',
  maxLength: 20,
};

export const row = Template.bind({});
row.args = {
  placeholder: 'placeholder',
  maxLength: 20,
  rows: 5,
};

export const withLabel = Template.bind({});
withLabel.args = {
  id: 'label',
  placeholder: '라벨을 선택하세요',
  maxLength: 20,
};
withLabel.decorators = [
  (Story) => {
    return (
      <div>
        <label htmlFor="label">라벨</label>
        <Story htmlId="label" />
      </div>
    );
  },
];
