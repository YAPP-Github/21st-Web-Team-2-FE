import { TEST_IMAGE } from '@mocks/data/image';

import VoteOption from '@src/types/VoteOption';

export const VOTE_OPTION: VoteOption = {
  voteOptionId: 1,
  text: 'Content1 OptionA',
  image: null,
  codeBlock: null,
  voted: false,
  voteAmount: 1,
};

export const VOTE_OPTION2: VoteOption = {
  ...VOTE_OPTION,
  voteOptionId: 2,
  text: 'Content1 OptionB',
};

export const VOTE_OPTIONS: VoteOption[] = [VOTE_OPTION, VOTE_OPTION2];

export const VOTE_OPTION_WITH_IMAGE: VoteOption = {
  ...VOTE_OPTION,
  voteOptionId: 9,
  text: '이미지가 있음',
  image: TEST_IMAGE,
};

export const CODE_BLOCK: VoteOption['codeBlock'] = {
  language: 'js',
  contents: `
import React, { MouseEvent } from 'react';

import { Languages } from '@src/components/common/CodeEditor';
import Icon from '@src/components/common/Icon';
import VoteOption from '@src/types/VoteOption';

import * as S from './SelectOption.style';

interface SelectOptionProps extends VoteOption {
  rate?: number;
  result?: boolean;
  selected?: boolean;
  onClick: (id: number, selected: boolean) => void;
}

const SelectOption = (props: SelectOptionProps) => {
  const { voteOptionId, text, rate = 0, result = false, selected = false, image, codeBlock, onClick } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    onClick(voteOptionId, selected);
  };

  return (
    <S.Container>
      <S.SelectButton $result={result} $selected={selected} onClick={handleClick}>
        {result && <S.ProgressBar className="progress" $rate={rate} $selected={selected} />}
        <S.Info>
          <Icon name="Vote" />
          <S.Text>{text}</S.Text>
          {result && <S.Rate>{Math.round(rate * 100)}%</S.Rate>}
        </S.Info>
      </S.SelectButton>
      {image && (
        <S.ImageWrapper>
          <S.OptionImage src={image} alt={text} fill />
        </S.ImageWrapper>
      )}
      {codeBlock && <S.CodeBlock language={codeBlock.language as Languages} value={codeBlock.contents} disabled />}
    </S.Container>
  );
};

export default SelectOption;
    `,
};

export const VOTE_OPTION_WITH_CODE: VoteOption = {
  ...VOTE_OPTION,
  voteOptionId: 9,
  text: '코드가 있어요!',
  codeBlock: CODE_BLOCK,
};
