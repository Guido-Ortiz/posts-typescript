import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Post {
  id: number;
  userId: number;//´rerere
  title: string;
  body: string;
}

export interface FetchPostAction {
  type: ActionTypes.fetchPosts;
  payload: Post[];
}

export interface DeletePostAction {
  type: ActionTypes.deletePost;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = () => {
  return async (dispatch:  Dispatch) => {
    const response = await axios.get<Post[]>(url);
    dispatch<FetchPostAction>({
      type: ActionTypes.fetchPosts,
      payload: response.data
    })
  };
};

export const deletePost = (id: number): DeletePostAction => {
  return {
    type: ActionTypes.deletePost,
    payload: id
  };
};