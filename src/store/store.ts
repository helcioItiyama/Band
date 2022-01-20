import {configureStore} from '@reduxjs/toolkit';
import albumReducer from './albumReducer';
import themeReducer from './themeReducer';

const store = configureStore({
  reducer: {
    album: albumReducer,
    theme: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;