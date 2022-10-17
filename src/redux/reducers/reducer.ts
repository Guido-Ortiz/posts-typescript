import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { Post } from '../actions/action-creators';

export interface StoreState {
  posts: Post[];
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer
});
























// import { postsReducer } from "./postsReducer";
// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   postsReducer
// });

// export default rootReducer;