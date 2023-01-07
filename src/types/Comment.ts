export interface IComment {
  commentId: number;
  createdMemberId: number;
  createdMemberName: string;
  createdMemberProfileImage: string | null;
  createdMemberJobCategory: string;
  createdMemberWorkingYears: number;
  commentContent: string;
  likeAmount: number;
  liked: boolean;
}
