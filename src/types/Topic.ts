import VoteOption from '@src/types/VoteOption';

import Member from './Member';

export default interface Topic {
  topicId: number;
  title: string;
  contents: string;
  commentAmount: number;
  liked: boolean;
  likeAmount: number;
  tags: string[];
  voteAmount: number;
  voteOptions: VoteOption[];
  member: Member;
}

export type TopicCategory = 'CAREER' | 'DEVELOPER' | 'DESIGN' | 'PRODUCT_MANAGER';
