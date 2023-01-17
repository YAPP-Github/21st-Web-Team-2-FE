import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import Input from '.';

export default {
  title: 'common/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
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

export const 에러 = Template.bind({});
에러.args = {
  placeholder: 'placeholder',
  error: true,
};

export const 에러및메시지 = Template.bind({});
에러및메시지.args = {
  placeholder: 'placeholder',
  error: true,
  errorMessage: 'error message',
};

export const withLabel = Template.bind({});
withLabel.args = {
  htmlId: 'label',
  placeholder: '라벨을 선택하세요',
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
