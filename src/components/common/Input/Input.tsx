import { ChangeEvent, FC } from 'react';

import * as S from './Input.style';

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  maxLength?: number;
  htmlId?: string;
}
const Input: FC<Props> = (props) => {
  const { htmlId, placeholder, maxLength, error, errorMessage, value, onChange } = props;

  const isError = !!error;

  return (
    <>
      <S.Wrapper error={isError}>
        <S.Input placeholder={placeholder} maxLength={maxLength} onChange={onChange} value={value} id={htmlId} />
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
