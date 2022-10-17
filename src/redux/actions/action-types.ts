import { FetchPostAction, DeletePostAction, AddPostAction } from './action-creators';

export enum ActionTypes {
  fetchPosts,
  deletePost,
  addPost
}

export type Action = FetchPostAction | DeletePostAction | AddPostAction;
