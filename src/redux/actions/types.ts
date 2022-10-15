// export const GET_POSTS = "GET_POSTS";
import { FetchPostAction, DeletePostAction } from './index';

export enum ActionTypes {
  fetchPosts,
  deletePost
}

export type Action = FetchPostAction | DeletePostAction;
