import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import '@uiw/react-textarea-code-editor/dist.css';
import dynamic from 'next/dynamic';
import React from 'react';

import * as S from './CodeEditor.styles';
import { Languages } from './languages';

const TextAreaCodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), {
  ssr: false,
});

export interface CodeEditorProps extends TextareaCodeEditorProps {
  value: string;
  language: Languages;
}

const CodeEditor = (props: CodeEditorProps) => {
  const { value = '' } = props;

  return (
    <S.CodeEditorWrapper>
      <TextAreaCodeEditor {...props} value={value.trim()} />
    </S.CodeEditorWrapper>
  );
};

export default CodeEditor;
