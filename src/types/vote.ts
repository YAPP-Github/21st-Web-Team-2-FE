import { User } from '@src/types/user';

export interface HotVote {
  id: number;
  badge: string;
  title: string;
  user: User;
  participants: number;
  comments: number;
}
