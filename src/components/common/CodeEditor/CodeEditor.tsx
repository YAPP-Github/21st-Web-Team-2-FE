import { TextareaCodeEditorProps } from '@uiw/react-textarea-code-editor';
import '@uiw/react-textarea-code-editor/dist.css';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, useState } from 'react';

import * as S from './CodeEditor.styles';
import { LANGUAGES, Languages } from './languages';

const TextAreaCodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), {
  ssr: false,
});

export interface CodeEditorProps extends TextareaCodeEditorProps {
  value: string;
  language: Languages;
  onChangeLanguage?: (language: Languages) => void;
}

const CodeEditor = (props: CodeEditorProps) => {
  const { value = '', language, disabled, onChangeLanguage } = props;
  const [lang, setLang] = useState<Languages>(language);

  const handleLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Languages;
    setLang(value);
    onChangeLanguage && onChangeLanguage(value);
  };

  return (
    <S.CodeEditorWrapper>
      {disabled || (
        <S.LanguageSelector value={lang} onChange={handleLanguage}>
          {LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </S.LanguageSelector>
      )}
      <TextAreaCodeEditor {...props} value={value.trim()} language={lang} />
    </S.CodeEditorWrapper>
  );
};

export default CodeEditor;
