import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: start;

  padding-right: 38px;
  width: 100%;

  input {
    height: 30px;
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`;

export const LabelText = styled.p`
  width: 164px;

  ${theme.font.B3}
  color: ${theme.color.G7};
`;

export const DeleteBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  background-color: ${theme.color.G5};
  border-radius: 50%;

  cursor: pointer;
  visibility: hidden;
`;

export const OptionsContainer = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AddOption = styled.button`
  margin-left: 164px;

  width: fit-content;

  ${theme.font.B2}
  color: ${theme.color.Primary1};

  cursor: pointer;
`;

export const CodeEditorWrapper = styled.div`
  margin-left: 164px;
  margin-right: 38px;

  display: flex;
  flex-direction: column;

  min-height: 180px;

  .w-tc-editor {
    min-height: 180px;
  }
`;

export const ImgSelectorWrapper = styled.div`
  margin-left: 164px;

  width: 232px;
  height: 180px;

  background-color: ${theme.color.G4};
  border-radius: 4px;
`;
