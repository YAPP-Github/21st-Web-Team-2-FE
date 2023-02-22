import axios from 'axios';

import { BaseResponse } from '@src/apis/index';

export type UploadImageResponse = BaseResponse<string>;

export const uploadImage = async (image: FormData) => {
  const res = await axios.post<UploadImageResponse>('/image/upload', image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.data;
};
