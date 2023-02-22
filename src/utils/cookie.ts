import isServer from '@src/utils/isServer';

const cookie = {
  set(key: string, value: string, expires?: number): void {
    if (isServer()) return;

    let cookieString = `${key}=${value}`;
    if (expires) {
      const expiresDate = new Date();
      cookieString = `${cookieString}; expires=${expiresDate.setDate(expiresDate.getDate() + expires)}`;
    }

    document.cookie = cookieString;
  },

  get(key: string): string | undefined {
    if (isServer()) return;

    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(key))
      ?.split('=')[1];
  },

  remove(key: string): void {
    this.set(key, '', -1);
  },

  parse(cookieString?: string): { [key in string]: unknown } | undefined {
    if (!cookieString) return;

    return cookieString
      .split('; ')
      .map((value) => value.split('='))
      .reduce((prev, [key, value]) => ({ ...prev, [key]: JSON.parse(value) }), {});
  },
};

export default cookie;
