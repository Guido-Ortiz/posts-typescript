import { FetchPostAction, DeletePostAction } from './action-creators';

export enum ActionTypes {
  fetchPosts,
  deletePost
}

export type Action = FetchPostAction | DeletePostAction;
