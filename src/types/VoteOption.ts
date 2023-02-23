import { Languages } from '@src/components/common/CodeEditor';

export default interface VoteOption {
  voteOptionId: number;
  text: string;
  image?: string | null;
  language?: Languages | null;
  codeBlock?: string | null;
  voted: boolean;
  voteAmount: number;
  votedAmountStatistics: VotedAmountStatistics;
}

export interface VotedAmountStatistics {
  developerVoteAmount: number;
  designerVoteAmount: number;
  pmVoteAmount: number;
  etcVoteAmount: number;
}
