import { IComment } from '@src/types/Comment';

export const commentArr: IComment[] = [
  {
    commentId: 1,
    createdMemberId: 101,
    createdMemberName: 'gyu',
    createdMemberProfileImage: null,
    createdMemberJobCategory: '개발자', // 개발, 디자인, 기획, 기타(임의의 스트링)
    createdMemberWorkingYears: 1,
    commentContent:
      '사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
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
    commentContent: 'Comment 10',
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
    commentContent: 'Comment 10',
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
