import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import * as S from './Input.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
}
const Input: FC<Props> = (props) => {
  const { value, onChange, error, errorMessage, maxLength, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) return;

    onChange(e);
  };

  const isError = !!error;
  const isTyped = !!value;

  return (
    <>
      <S.Wrapper $error={isError} $isTyped={isTyped}>
        <S.Input {...rest} value={value} onChange={handleChange} maxLength={maxLength} />
        {maxLength && (
          <S.TextLength>
            (<S.CurrentText>{value.length}</S.CurrentText>/{maxLength})
          </S.TextLength>
        )}
      </S.Wrapper>
      {isError && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
};

export default Input;
