import VoteOption from '@src/types/VoteOption';

import Member from './Member';

export default interface Topic {
  topicId: number;
  title: string;
  contents: string;
  commentAmount: number;
  liked: boolean;
  likedAmount: number;
  tags: string[];
  votedAmount: number;
  voteOptions: VoteOption[];
  member: Member;
}
