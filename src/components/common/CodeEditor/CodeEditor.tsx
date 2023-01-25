import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import React from 'react';

import * as S from './CodeEditor.styles';
import { Languages } from './languages';

export interface CodeEditorProps extends TextareaCodeEditorProps {
  value: string;
  language: Languages;
}

const CodeEditor = (props: CodeEditorProps) => {
  const { value = '' } = props;
  return <S.CodeEditor {...props} value={value.trim()} />;
};

export default CodeEditor;
