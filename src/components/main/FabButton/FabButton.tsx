import { FC } from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './FabButton.styles';

interface Props {
  onClick: () => void;
  visible?: boolean;
}
const FabButton: FC<Props> = (props) => {
  const { onClick, visible = false } = props;

  return (
    <S.FabButton onClick={onClick} $visible={visible}>
      <Icon name="Create" color="G1" size={24} />
    </S.FabButton>
  );
};

export default FabButton;
