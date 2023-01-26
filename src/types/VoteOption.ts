export default interface VoteOption {
  voteOptionId: number;
  text: string;
  image?: string | null;
  codeBlock?: {
    language: string;
    contents: string;
  } | null;
  voted: boolean;
  voteAmount: number;
}
