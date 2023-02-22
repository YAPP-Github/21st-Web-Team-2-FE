import { atom } from 'recoil';

import { Auth } from '@src/apis';
import { COOKIE_KEYS } from '@src/constants';
import cookieEffect from '@src/recoil/effects/cookieEffect';

const $userSession = atom<Auth['jwtTokens'] | undefined>({
  key: 'user-session',
  default: undefined,
  effects: [cookieEffect(COOKIE_KEYS.TOKENS)],
});

export default $userSession;
