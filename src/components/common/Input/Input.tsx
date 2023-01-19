import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import * as S from './Input.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
}
const Input: FC<Props> = (props) => {
  const { id, name, placeholder, maxLength, error, errorMessage, value, onChange, ...rest } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) return;

    onChange(e);
  };

  const isError = !!error;
  const isTyped = !!value;

  return (
    <>
      <S.Wrapper $error={isError} $isTyped={isTyped}>
        <S.Input
          {...rest}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
        />
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
