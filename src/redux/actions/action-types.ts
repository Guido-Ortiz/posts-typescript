import { FetchPostAction, DeletePostAction, AddPostAction, FilterPostAction, EditPostAction } from './action-creators';

export enum ActionTypes {
  fetchPosts,
  deletePost,
  addPost, 
  filterPost, editPost
}

export type Action = FetchPostAction | DeletePostAction | AddPostAction | FilterPostAction | EditPostAction;


