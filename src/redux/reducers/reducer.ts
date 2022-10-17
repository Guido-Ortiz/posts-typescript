import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { Post } from '../actions/action-creators';

export interface StoreState {
  posts: Post[];
  allPosts: Post[]
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer,
  allPosts: postsReducer
});
