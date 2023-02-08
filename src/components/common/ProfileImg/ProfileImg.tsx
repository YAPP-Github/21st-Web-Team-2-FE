import Image from 'next/image';
import React from 'react';

import Icon from '@src/components/common/Icon';
import { JobCategory } from '@src/types/Member';

import * as S from './ProfileImg.styles';

export interface ProfileImg {
  size?: number;
  src?: string | null;
  jobCategory: JobCategory;
}

const ProfileImg: React.FC<ProfileImg> = (props) => {
  const { size, src, jobCategory } = props;
  return (
    <S.Container $size={size}>
      {src ? (
        <Image src={src} alt="profile-image" width={size} height={size} />
      ) : (
        <Icon name={JOB_IMAGE[jobCategory] || 'Developer'} size={size} />
      )}
    </S.Container>
  );
};

type JobImage = 'Designer' | 'Developer' | 'Pm';

const JOB_IMAGE: { [keys in JobCategory]: JobImage } = {
  designer: 'Designer',
  developer: 'Developer',
  pm: 'Pm',
};

export default ProfileImg;
