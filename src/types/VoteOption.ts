import { Languages } from '@src/components/common/CodeEditor';

export default interface VoteOption {
  voteOptionId: number;
  text: string;
  image?: string | null;
  codeBlock?: {
    language: Languages;
    contents: string;
  } | null;
  voted: boolean;
  voteAmount: number;
}
