import { combineReducers } from 'redux';
import { postsReducer, PostStoreState } from './postsReducer';

export interface StoreState {
  posts: PostStoreState
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer
})
