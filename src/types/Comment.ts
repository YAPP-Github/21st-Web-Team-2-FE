export interface IComment {
  // user
  createdMemberId: number;
  createdMemberJobCategory: string;
  createdMemberName: string;
  createdMemberWorkingYears: number;
  createdMemberProfileImage?: string | null;

  // comment - 백엔드랑 협의 필요
  commentAmount?: number;
  commentId: number;
  contents: string;
  likes: number; //  백엔드 개발자 분한테 물어보기!
}
