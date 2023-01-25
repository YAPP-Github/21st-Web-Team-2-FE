import styled from '@emotion/styled';
import TextAreaCodeEditor from '@uiw/react-textarea-code-editor';

import theme from '@src/styles/theme';

export const CodeEditor = styled(TextAreaCodeEditor)`
  ${theme.font.code}
`;
