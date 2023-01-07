import { IComment } from '@src/types/Comment';

export const commentArr: IComment[] = [
  {
    commentId: 1,
    createdMemberId: 101,
    createdMemberName: 'gyu',
    createdMemberProfileImage: null,
    createdMemberJobCategory: '개발자', // 개발, 디자인, 기획, 기타(임의의 스트링)
    createdMemberWorkingYears: 1,
    commentContent: 'AI 강추!!',
    likeAmount: 12,
    liked: true,
  },
  {
    commentId: 90,
    createdMemberId: 16,
    createdMemberName: 'MemberC',
    createdMemberProfileImage: null,
    createdMemberJobCategory: '기획',
    createdMemberWorkingYears: 4,
    commentContent: 'FE 좋아요~',
    likeAmount: 30,
    liked: false,
  },
  {
    commentId: 89,
    createdMemberId: 15,
    createdMemberName: 'MemberB',
    createdMemberProfileImage: null,
    createdMemberJobCategory: '디자이너',
    createdMemberWorkingYears: 5,
    commentContent: '디자이너가 최고임 🎉',
    likeAmount: 29,
    liked: false,
  },
  {
    commentId: 222,
    createdMemberId: 2,
    createdMemberName: 'kk',
    createdMemberProfileImage: null,
    createdMemberJobCategory: '다자이너',
    createdMemberWorkingYears: 3,
    commentContent: '나는 디자이너!',
    likeAmount: 29,
    liked: false,
  },
];
