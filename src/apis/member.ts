import axios from 'axios';

import { BaseResponse } from '@src/apis/index';
import Member from '@src/types/Member';

export type GetProfileResponseData = Pick<Member, 'nickname' | 'profileImage'>;
export type GetProfileResponse = BaseResponse<GetProfileResponseData>;

export const getProfile = async (token: string) => {
  const res = await axios.get<GetProfileResponse>('/profile', {
    headers: {
      Authorization: token,
    },
  });

  return res.data;
};
