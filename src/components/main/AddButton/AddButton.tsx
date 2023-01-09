import { FC } from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './AddButton.styles';

interface Props {
  onClick: () => void;
}
const AddButton: FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <S.AddButton onClick={onClick}>
      <Icon name="Create" color="Primary1" size={24} />
      <span>직접 토픽을 만들어서 커리어 궁금점을 풀어보세요 :)</span>
    </S.AddButton>
  );
};

export default AddButton;
