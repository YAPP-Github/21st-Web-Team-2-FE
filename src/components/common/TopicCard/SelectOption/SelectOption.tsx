import React, { MouseEvent } from 'react';

import CodeEditor from '@src/components/common/CodeEditor';
import Icon from '@src/components/common/Icon';
import { TopicCardType } from '@src/components/common/TopicCard';
import VoteOption from '@src/types/VoteOption';

import * as S from './SelectOption.style';

interface SelectOptionProps extends VoteOption {
  type?: TopicCardType;
  rate?: number;
  result?: boolean;
  selected?: boolean;
  onClick: (id: number, selected: boolean) => void;
}

const SelectOption = (props: SelectOptionProps) => {
  const {
    voteOptionId,
    text,
    type = 'feed',
    rate = 0,
    result = false,
    selected = false,
    image,
    language,
    codeBlock,
    onClick,
  } = props;

  const isFeed = type === 'feed';

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
      {codeBlock && (
        <S.CodeBlockWrapper $type={type}>
          <CodeEditor language={language || 'javascript'} value={codeBlock} disabled />
          {isFeed && <S.CodeBlockGradiant />}
        </S.CodeBlockWrapper>
      )}
      {image && (
        <S.ImageWrapper>
          <S.OptionImage src={image} alt={text} fill />
        </S.ImageWrapper>
      )}
    </S.Container>
  );
};

export default SelectOption;
