import { ComponentStory } from '@storybook/react';
import React from 'react';

import { TEST_IMAGE } from '@mocks/data/image';

import TopicCard from '.';

export default {
  component: TopicCard,
  title: 'common/TopicCard/SelectOption',
};

const Template: ComponentStory<typeof TopicCard> = (args) => <TopicCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Text',
};

export const 선택한_결과 = Template.bind({});
선택한_결과.args = {
  text: 'Text',
  rate: 0.86,
  result: true,
  selected: true,
};

export const 선택안된_결과 = Template.bind({});
선택안된_결과.args = {
  text: 'Text',
  rate: 0.24,
  result: true,
};

export const 이미지 = Template.bind({});
이미지.args = {
  ...Default.args,
  image: TEST_IMAGE,
};

export const 코드블록 = Template.bind({});
코드블록.args = {
  ...Default.args,
  codeBlock: {
    language: 'js',
    contents: `
import React, { MouseEvent } from 'react';

import { Languages } from '@src/components/common/CodeEditor';
import Icon from '@src/components/common/Icon';
import VoteOption from '@src/types/VoteOption';

import * as S from './SelectOption.style';

interface SelectOptionProps extends VoteOption {
  rate?: number;
  result?: boolean;
  selected?: boolean;
  onClick: (id: number, selected: boolean) => void;
}

const SelectOption = (props: SelectOptionProps) => {
  const { voteOptionId, text, rate = 0, result = false, selected = false, image, codeBlock, onClick } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    onClick(voteOptionId, selected);
  };

  return (
    <S.Container>
      <S.SelectButton $result={result} $selected={selected} onClick={handleClick}>
        {result && <S.ProgressBar className="progress" $rate={rate} $selected={selected} />}
        <S.Info>
          <Icon name="Vote" />
          <S.Text>{text}</S.Text>
          {result && <S.Rate>{Math.round(rate * 100)}%</S.Rate>}
        </S.Info>
      </S.SelectButton>
      {image && (
        <S.ImageWrapper>
          <S.OptionImage src={image} alt={text} fill />
        </S.ImageWrapper>
      )}
      {codeBlock && <S.CodeBlock language={codeBlock.language as Languages} value={codeBlock.contents} disabled />}
    </S.Container>
  );
};

export default SelectOption;
    `,
  },
};
