import Member from './Member';

export default interface Topic {
  id?: number;
  title: string;
  contents: string;
  options: TopicOption[];
  member: Member;
  participation: number;
  comments: number;
}

export interface TopicOption {
  id?: number;
  text: string;
  rate?: number;
}
