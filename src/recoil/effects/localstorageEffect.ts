// GYU-DELETE
import { AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') {
      return;
    }

    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export default localStorageEffect;
