import React, { FC } from 'react';

import DefaultImage from '@src/assets/user-default.png';
import TagList from '@src/components/common/TagList';

import * as S from './TopicUserInfo.styles';

// TODO-GYU: API 나오면 변경 예정
// 기존 Member 타입에 연차 값이 존재하지 않아, 우선 새로운 타입으로 정의!
// 다른 코드와 깨질거 같아서 여기서 정의
interface Member {
  id?: number;
  jobCategory: string;
  nickname: string;
  profileImage: string | null;
  workingYears: number;
}

interface Props {
  member: Member;
  tags: string[];
}
const TopicUserInfo: FC<Props> = (props) => {
  const { member, tags } = props;

  return (
    <S.Wrapper>
      <S.MemberSummary>
        <S.Profile src={member.profileImage ?? DefaultImage} alt={member.nickname} width={44} height={44} />
        <S.MemberWrapper>
          <S.MemberNickName>{member.nickname}</S.MemberNickName>
          <S.MemberInfo>
            {member.jobCategory}·{member.workingYears}연차
          </S.MemberInfo>
        </S.MemberWrapper>
      </S.MemberSummary>
      <S.TagListWrapper>
        <TagList tags={tags} />
      </S.TagListWrapper>
    </S.Wrapper>
  );
};

export default TopicUserInfo;
