// import { Post } from '../actions/action-creators';
// import { ActionTypes, Action } from '../actions/action-types';
// import { StoreState } from './reducer';

// export const postsReducer = (state: Post[] = [], action: Action) => {
//   switch (action.type) {

//     case ActionTypes.fetchPosts:
//       return action.payload;
        
      

//     case ActionTypes.deletePost:
//       return state.filter((post: Post) => post.id !== action.payload);
      

//     case ActionTypes.resetPosts:
//       return [];

//     default:
//       return state;
//   }
// };










import { Post } from '../actions/action-creators';
import { ActionTypes,  Action } from '../actions/action-types';

export interface PostStoreState {
  posts: Post[];
}

const initialState: PostStoreState = {
  posts: [],
  
};

export const postsReducer = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchPosts:
      return {
        ...state,
        posts: action.payload,
        // loading: false
      }
    case ActionTypes.deletePost:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.payload),
        // loading: false
      }
          case ActionTypes.resetPosts:
      return {
        ...state,
        posts: []
      }
    // case ActionTypes.loadingAction:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    default:
      return state;
  }
};