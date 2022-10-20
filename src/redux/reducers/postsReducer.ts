import { Post } from '../actions/action-creators';
import { ActionTypes,  Action } from '../actions/action-types';

export interface PostStoreState {
  posts: Post[];
}

const initialState: PostStoreState = {
  posts: [],
}

export const postsReducer = ( state = initialState, action: Action) => {

  switch (action.type) {

    case ActionTypes.fetchPosts:
      return {
        ...state,
        posts: action.payload,
      }

    case ActionTypes.deletePost:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.payload),
      }

      case ActionTypes.resetPosts:
        return {
          ...state,
          posts: []
        }
    
      default:
        return state;
  }
}