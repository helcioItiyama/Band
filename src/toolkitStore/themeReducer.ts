import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
    setThemeType: (state, {payload}:PayloadAction<ThemeState>) => {
      state = payload;
    },
    toggleTheme: (state) => {
      state.type = state.type === 'light' ? 'dark' : 'light';
    }
  }
});

export const {setThemeType, toggleTheme} = themeSlice.actions;
export const themeState = ((state: RootState) => state.theme);
export default themeSlice.reducer;