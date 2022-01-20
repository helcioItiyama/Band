import {makeAutoObservable} from "mobx";

export type ThemeType = 'light' | 'dark'

class ThemeStore {
  type: ThemeType = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  toggle() {
    this.type = this.type === 'light' ? 'dark' : 'light';
  }
}

const themeStore = new ThemeStore();

export default themeStore;