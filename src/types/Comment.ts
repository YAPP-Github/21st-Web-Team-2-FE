import Member from '@src/types/Member';

export default interface Comment {
  commentId: number;
  contents: string;
  likeAmount: number;
  liked: boolean;
  member: Member;
}
