import React from 'react';

import Icon from '@src/components/common/Icon';
import { TopicOption } from '@src/types/Topic';

import * as S from './SelectOption.style';

interface SelectOption {
  option: TopicOption;
}

const SelectOption = (props: SelectOption) => {
  const { option } = props;

  return (
    <S.SelectOption>
      <Icon name="Vote" />
      {option.text}
    </S.SelectOption>
  );
};

export default SelectOption;
