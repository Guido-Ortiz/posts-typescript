import { Post } from '../actions/action-creators';
import { ActionTypes,  Action } from '../actions/action-types';
import { StoreState } from './reducer';

export const postsReducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {

    case ActionTypes.fetchPosts:
      return action.payload;

    case ActionTypes.deletePost:
      return state.filter((post: Post) => post.id !== action.payload);

    case ActionTypes.addPost:
      // return state.concat([action.payload])
      return [action.payload].concat(state)

      
    default:
      return state;
  }
};
