import styled from '@emotion/styled';

import theme from '../../styles/theme';

const StyledButton = styled.button`
  background-color: ${theme.color.bgSecondary};
  color: ${theme.color.primaryLight};
  border: 1px solid ${theme.color.borderPrimary};
  border-radius: ${theme.borderRadius.sm};
  padding: 8px 16px;
  line-height: ${theme.lineHeight.lg};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.mainTitle};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 10px;

  &:hover {
    background-color: ${theme.color.bgThird};
    color: ${theme.color.primaryDark};
  }
`;

export default StyledButton;
