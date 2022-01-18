import { atom, selector } from "recoil";

export type Theme = 'light' | 'dark';

export const themeType = atom<Theme>({
  key: 'themeType',
  default: 'light',
});

export const themeState = selector({
  key: 'themeState',
  get: ({get}) => {
    get(themeType);
  },
  set: ({get, set}) => {
    const currentTheme = get(themeType);
    set(themeType, currentTheme === 'light' ? 'dark' : 'light');
  }
})