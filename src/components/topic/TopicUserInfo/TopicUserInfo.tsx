import React, { FC } from 'react';

import { Member } from '@src/apis';
import DefaultImage from '@src/assets/user-default.png';
import TagList from '@src/components/common/TagList';

import * as S from './TopicUserInfo.styles';

interface Props {
  member: Member;
  tags: string[];
}
const TopicUserInfo: FC<Props> = (props) => {
  const { member, tags } = props;

  const { name, profileImage, jobCategory, workingYears } = member;
  return (
    <S.Wrapper>
      <S.MemberSummary>
        <S.Profile src={profileImage ?? DefaultImage} alt={name} width={44} height={44} />
        <S.MemberWrapper>
          <S.MemberNickName>{name}</S.MemberNickName>
          <S.MemberInfo>
            {jobCategory}·{workingYears}연차
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
