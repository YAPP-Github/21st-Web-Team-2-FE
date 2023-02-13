import React, { FC } from 'react';

import ProfileImg from '@src/components/common/ProfileImg';
import Member from '@src/types/Member';

import * as S from './UserInfo.styles';

interface Props {
  type?: 'simple' | 'full';
  member: Member;
}

const UserInfo: FC<Props> = (props) => {
  const { type = 'full', member } = props;
  const { nickname, jobCategory, workingYears, profileImage } = member;

  const size = type === 'full' ? 44 : 28;

  return (
    <S.Wrapper>
      <ProfileImg src={profileImage} jobCategory={jobCategory} size={size} />
      <S.SummaryWrapper>
        <S.UserNickName>{nickname}</S.UserNickName>
        {type === 'full' && (
          <S.UserInfo>
            {jobCategory} · {workingYears}
          </S.UserInfo>
        )}
      </S.SummaryWrapper>
    </S.Wrapper>
  );
};

export default UserInfo;
