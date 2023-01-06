// TODO-GYU: api 및 상태 관리가 제대로 나올 때 이런 값들은 어떻게 관리할지 논의하기
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

export const commentArr: IComment[] = [
  {
    createdMemberId: 1,
    createdMemberJobCategory: '개발자',
    createdMemberName: 'gyu',
    createdMemberWorkingYears: 1,
    createdMemberProfileImage: null,
    commentId: 1,
    contents:
      '사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
    likes: 12,
  },
  {
    createdMemberId: 3,
    createdMemberJobCategory: '개발자',
    createdMemberName: 'dev.gg',
    createdMemberWorkingYears: 1,
    createdMemberProfileImage: null,
    commentId: 3,
    contents: '이게 좋아요!!',
    likes: 1,
  },
  {
    createdMemberId: 4,
    createdMemberJobCategory: '개발자',
    createdMemberName: 'dev.kkk',
    createdMemberWorkingYears: 1,
    createdMemberProfileImage: null,
    commentId: 4,
    contents: '나는 개발자',
    likes: 0,
  },
  {
    createdMemberId: 2,
    createdMemberJobCategory: '다자이너',
    createdMemberName: 'kk',
    createdMemberWorkingYears: 3,
    createdMemberProfileImage: null,
    commentId: 2,
    contents: '나는 디자이너!',
    likes: 9,
  },
];
