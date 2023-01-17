import { ChangeEvent, FC } from 'react';

import * as S from './Input.style';

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  maxLength?: number;
  name?: string;
  htmlId?: string;
}
const Input: FC<Props> = (props) => {
  const { htmlId, name, placeholder, maxLength, error, errorMessage, value, onChange } = props;

  const isError = !!error;
  const isTyped = !!value.length;

  return (
    <>
      <S.Wrapper $error={isError} $isTyped={isTyped}>
        <S.Input
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
          id={htmlId}
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
