import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export interface SelectButtonProps {
  $selected: boolean;
}

const SelectButton = styled.button<SelectButtonProps>`
  display: flex;
  align-items: center;
  padding: 15px 20px;

  background-color: ${theme.color.G4};
  border-radius: 8px;

  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.textSize.B1};
  line-height: ${theme.lineHeight.B};
  color: ${theme.color.G8};

  &:hover {
    background-color: ${theme.color.G5};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border: 1px solid ${theme.color.Primary1};

      color: ${theme.color.Primary1};
    `}
`;

export default SelectButton;
