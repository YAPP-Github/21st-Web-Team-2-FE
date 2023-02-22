import { ResponseComposition, RestContext, RestRequest, rest } from 'msw';

import { TEST_IMAGE } from '@mocks/data/image';

import { UploadImageResponse } from '@src/apis';
import { BASE_URL } from '@src/configs/axios';

const uploadImage = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json<UploadImageResponse>({
      code: 'SUCCESS',
      message: '성공',
      data: TEST_IMAGE,
    }),
  );
};

const imageHandler = [
  rest.post(`${BASE_URL}/image/upload`, uploadImage), //
];

export default imageHandler;
