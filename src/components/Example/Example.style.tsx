import styled from '@emotion/styled';

import theme from '../../styles/theme';

const StyledButton = styled.button`
  background-color: ${theme.color.bgSecondary};
  color: ${theme.color.txtDanger};
  border: 1px solid ${theme.color.borderPrimary};
  border-radius: ${theme.borderRadius.sm};
  padding: 8px 16px;
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 10px;
`;

export default StyledButton;
