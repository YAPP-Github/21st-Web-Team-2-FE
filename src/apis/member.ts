import axios from 'axios';

import { BaseResponse } from '@src/apis/index';
import Member from '@src/types/Member';

export type GetMemberResponse = BaseResponse<Member>;

export const getMember = async (token?: string) => {
  const res = await axios.get<GetMemberResponse>('/member', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
