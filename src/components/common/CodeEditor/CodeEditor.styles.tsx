import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const CodeEditorWrapper = styled.div`
  background-color: #161a23;
  border-radius: 4px;

  ${theme.font.code}

  .w-tc-editor {
    border-radius: 4px;
  }
  .w-tc-editor,
  * {
    ${theme.font.code}
  }
`;

export const LanguageSelector = styled.select`
  margin: 8px 12px;

  background-color: transparent;
  border: none;

  ${theme.font.B4}
  color: ${theme.color.G8};

  cursor: pointer;
  outline: none;

  option {
    background: ${theme.color.G2};
  }
`;
