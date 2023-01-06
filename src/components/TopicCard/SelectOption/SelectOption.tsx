import React from 'react';

import Icon from '@src/components/common/Icon';
import { TopicOption } from '@src/types/Topic';

import * as S from './SelectOption.style';

interface SelectOptionProps extends TopicOption {
  result?: boolean;
  selected?: boolean;
}

const SelectOption = (props: SelectOptionProps) => {
  const { text, rate = 0, result = false, selected = false } = props;

  return (
    <S.Container $result={result}>
      {result && <S.ProgressBar $rate={rate} $selected={selected} />}
      <S.Info>
        <Icon name="Vote" />
        {text}
        {result && <S.Rate>{Math.round(rate * 100)}%</S.Rate>}
      </S.Info>
    </S.Container>
  );
};

export default SelectOption;
