import Member from './Member';

export default interface Topic {
  id?: number;
  title: string;
  contents: string;
  options: TopicOption[];
  member: Member;
  comments: number;
}

export interface TopicOption {
  id: number;
  text: string;
  voters: number;
}
