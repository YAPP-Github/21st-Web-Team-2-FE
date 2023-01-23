import React, { MouseEvent } from 'react';

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
  const { voteOptionId, text, rate = 0, result = false, selected = false, onClick } = props;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    onClick(voteOptionId, selected);
  };

  return (
    <S.Container $result={result} $selected={selected} onClick={handleClick}>
      {result && <S.ProgressBar className="progress" $rate={rate} $selected={selected} />}
      <S.Info>
        <Icon name="Vote" />
        <S.Text>{text}</S.Text>
        {result && <S.Rate>{Math.round(rate * 100)}%</S.Rate>}
      </S.Info>
    </S.Container>
  );
};

export default SelectOption;
