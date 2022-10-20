import { FetchPostAction, DeletePostAction, ResetPostsAction } from './action-creators';

export enum ActionTypes {
  fetchPosts,
  deletePost,
  resetPosts
}

export type Action = FetchPostAction | DeletePostAction | ResetPostsAction;


