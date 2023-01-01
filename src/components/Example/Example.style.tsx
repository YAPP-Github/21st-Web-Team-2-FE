import styled from '@emotion/styled';

import theme from '../../styles/theme';

const StyledButton = styled.button`
  background-color: ${theme.color.G8};
  color: ${theme.color.Primary1};
  border: 1px solid ${theme.color.borderPrimary};
  border-radius: ${theme.borderRadius.sm};
  padding: 8px 16px;
  line-height: ${theme.lineHeight.B};
  font-size: ${theme.textSize.B2};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.mainTitle};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 10px;

  &:hover {
    background-color: ${theme.color.Primary2};
    color: ${theme.color.G8};
  }
`;

export default StyledButton;
