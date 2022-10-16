import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { Post } from '../actions/action-creators';

export interface StoreState {
  posts: Post[];
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer
});