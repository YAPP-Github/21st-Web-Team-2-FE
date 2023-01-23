import VoteOption from '@src/types/VoteOption';

export const VOTE_OPTION: VoteOption = {
  voteOptionId: 1,
  text: 'Content1 OptionA',
  image: null,
  codeBlock: null,
  voted: false,
  votedAmount: 1,
};

export const VOTE_OPTION2: VoteOption = {
  ...VOTE_OPTION,
  voteOptionId: 2,
  text: 'Content1 OptionB',
};

export const VOTE_OPTIONS: VoteOption[] = [VOTE_OPTION, VOTE_OPTION2];
