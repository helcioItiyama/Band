import {combineReducers, createStore, Store} from 'redux';
import albumReducer from './Album/reducer';
import {AlbumState} from './Album/types';

export interface RootState {
  album: AlbumState;
}

const reducer = combineReducers({
  feed: albumReducer,
});

const INITIAL_STATE = {};

export const store: Store<RootState> = createStore(reducer, INITIAL_STATE);
