import { User } from '@src/types/user';

export interface HotVote {
  badge: string;
  title: string;
  user: User;
  participants: number;
  comments: number;
}
