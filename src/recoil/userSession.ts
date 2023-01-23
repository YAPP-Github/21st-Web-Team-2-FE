import { atom } from 'recoil';

// TODO-GYU: user 값이 무엇인지에 따라 타입 변경해야함! (API 나오면 확인하기)
// 임시로 Auth로 처리
import { Auth } from '@src/apis/auth';

import localStorageEffect from './effects/localstorageEffect';

const $userSession = atom<Auth | undefined>({
  key: 'user-sesseion',
  default: undefined,
  effects: [localStorageEffect('user')],
});

export default $userSession;
