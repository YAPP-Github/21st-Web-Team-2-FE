import { AtomEffect } from 'recoil';

import cookie from '@src/utils/cookie';
import isServer from '@src/utils/isServer';

const cookieEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (isServer()) return;

    const savedValue = cookie.get(key);

    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset ? cookie.remove(key) : cookie.set(key, JSON.stringify(newValue));
    });
  };

export default cookieEffect;
