import React, { FC } from 'react';

import ProfileImg from '@src/components/common/ProfileImg';
import TagList from '@src/components/common/TagList';
import Member from '@src/types/Member';

import * as S from './TopicUserInfo.styles';

interface Props {
  member: Member;
  tags: string[];
}

const TopicUserInfo: FC<Props> = (props) => {
  const { member, tags } = props;

  const { nickname, profileImage, jobCategory, workingYears } = member;
  return (
    <S.Wrapper>
      <S.MemberSummary>
        <ProfileImg size={44} src={profileImage} jobCategory={jobCategory} />
        <S.MemberWrapper>
          <S.MemberNickName>{nickname}</S.MemberNickName>
          <S.MemberInfo>
            {jobCategory}·{workingYears}
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
