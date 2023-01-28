import React, { MouseEvent } from 'react';

import CodeEditor, { Languages } from '@src/components/common/CodeEditor';
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
      {codeBlock && (
        <S.CodeBlockWrapper>
          <CodeEditor language={codeBlock.language as Languages} value={codeBlock.contents} disabled />
          <S.CodeBlockGradiant />
        </S.CodeBlockWrapper>
      )}
    </S.Container>
  );
};

export default SelectOption;
