import { ChangeEvent, FC, TextareaHTMLAttributes } from 'react';

import * as S from './TextArea.styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

const TextArea: FC<Props> = (props) => {
  const { value, onChange, maxLength, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && e.target.value.length > maxLength) return;

    onChange && onChange(e);
  };

  const isTyped = !!value;

  return (
    <S.Wrapper $isTyped={isTyped}>
      <S.TextAreaWrapper>
        <S.TextArea {...rest} value={value} onChange={handleChange} maxLength={maxLength} />
      </S.TextAreaWrapper>
      {maxLength && (
        <S.TextLengthWrpper>
          <S.TextLength>
            (<S.CurrentText>{value.length}</S.CurrentText>/{maxLength})
          </S.TextLength>
        </S.TextLengthWrpper>
      )}
    </S.Wrapper>
  );
};

export default TextArea;
