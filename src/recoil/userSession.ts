import { atom } from 'recoil';

import { Auth } from '@src/apis/auth';
import { localstorageKeys } from '@src/constants/localstorage';

import localStorageEffect from './effects/localstorageEffect';

const $userSession = atom<Auth['jwtTokens'] | undefined>({
  key: 'user-session',
  default: undefined,
  effects: [localStorageEffect(localstorageKeys.user)],
});

export default $userSession;
