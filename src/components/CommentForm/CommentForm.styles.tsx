import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Form = styled.form`
  border: 1px solid ${theme.color.G4};
  border-radius: 8px;
  background: ${theme.color.G1};
  display: flex;
  flex-direction: column;
`;

export const TextAreaWrapper = styled.div`
  padding: 20px;
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  resize: none;
  border: none;
  caret-color: ${theme.color.Primary1};
  color: ${theme.color.borderPrimary};
  font-family: ${theme.fontFamily.basic};

  &::placeholder {
    color: ${theme.color.txtSecondary};
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  width: 62px;
  border-radius: 8px;
  height: 47px;
  background: ${theme.color.Primary1};
  border: 1px solid ${theme.color.Primary1};
  cursor: pointer;
  font-family: ${theme.fontFamily.basic};

  &:disabled {
    background-color: ${theme.color.G4};
    border-color: ${theme.color.G4};
    cursor: auto;
  }
`;
