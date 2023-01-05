import { useState } from 'react';
import { ChangeEvent, FC, FormEvent } from 'react';

import * as S from './CommentForm.styles';

interface Props {
  placeholder: string;
  rows?: number;
  onSubmit: (commentValue: string) => void;
}
const CommentForm: FC<Props> = (props) => {
  const { placeholder, rows, onSubmit } = props;

  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(value);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.TextAreaWrapper>
        <S.TextArea rows={rows ?? 3} placeholder={placeholder} value={value} onChange={handleChange} />
      </S.TextAreaWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton disabled={!value}>등록</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default CommentForm;
