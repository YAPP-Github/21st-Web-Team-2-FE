import Image from 'next/image';
import React from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './ProfileImg.styles';

export interface ProfileImg {
  size?: number;
  src?: string | null;
  jobCategory: string;
}

const ProfileImg: React.FC<ProfileImg> = (props) => {
  const { size, src, jobCategory } = props;
  return (
    <S.Container $size={size}>
      {src ? (
        <Image src={src} alt="profile-image" width={size} height={size} />
      ) : (
        <Icon name={JOB_IMAGE[jobCategory] || 'Default'} size={size} />
      )}
    </S.Container>
  );
};

type JobImage = 'Designer' | 'Developer' | 'Pm';

const JOB_IMAGE: { [keys in string]: JobImage } = {
  디자인: 'Designer',
  개발자: 'Developer',
  기획: 'Pm',
};

export default ProfileImg;
