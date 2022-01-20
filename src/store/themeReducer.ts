import {createSlice} from '@reduxjs/toolkit';
import { RootState } from './store';

export type ThemeType = 'light' | 'dark';

export interface ThemeState {
  type: ThemeType;
};

const initialState: ThemeState = {
  type: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.type = state.type === 'light' ? 'dark' : 'light';
    }
  }
});

export const {toggleTheme} = themeSlice.actions;
export const themeState = ((state: RootState) => state.theme);
export default themeSlice.reducer;