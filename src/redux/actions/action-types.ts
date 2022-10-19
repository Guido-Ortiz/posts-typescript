import { FetchPostAction, DeletePostAction, AddPostAction, FilterPostAction, EditPostAction, ResetPostsAction } from './action-creators';

export enum ActionTypes {
  fetchPosts,
  deletePost,
  addPost, 
  filterPost, 
  editPost,
  resetPosts
}

export type Action = FetchPostAction | DeletePostAction | AddPostAction | FilterPostAction | EditPostAction | ResetPostsAction;


