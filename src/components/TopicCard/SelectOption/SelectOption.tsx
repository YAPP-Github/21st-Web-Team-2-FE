import React from 'react';

import Icon from '@src/components/common/Icon';
import { TopicOption } from '@src/types/Topic';

import * as S from './SelectOption.style';

interface SelectOptionProps extends TopicOption {
  rate?: number;
  result?: boolean;
  selected?: boolean;
  onClick: (id: number, selected: boolean) => void;
}

const SelectOption = (props: SelectOptionProps) => {
  const { id, text, rate = 0, result = false, selected = false, onClick } = props;

  const handleClick = () => {
    onClick(id, selected);
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
