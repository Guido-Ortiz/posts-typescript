import { FetchPostAction, DeletePostAction, AddPostAction, FilterPostAction } from './action-creators';

export enum ActionTypes {
  fetchPosts,
  deletePost,
  addPost, 
  filterPost
}

export type Action = FetchPostAction | DeletePostAction | AddPostAction | FilterPostAction;


