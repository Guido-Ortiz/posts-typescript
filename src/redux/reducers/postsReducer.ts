import { Post } from '../actions/action-creators';
import { ActionTypes,  Action } from '../actions/action-types';

export const postsReducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {

    case ActionTypes.fetchPosts:
      return action.payload;

    case ActionTypes.deletePost:
      return state.filter((post: Post) => post.id !== action.payload);
      
    default:
      return state;
  }
};