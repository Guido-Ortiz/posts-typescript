import { Action } from '@remix-run/router';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './action-types';

export interface Post {
  id: number;
  userId: number;
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

export interface AddPostAction {
  type: ActionTypes.addPost;
  payload: Post
}

export interface FilterPostAction {
  type: ActionTypes.filterPost;
  payload: number
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

export const filterUser = (payload: number): FilterPostAction => {
  return {
    type: ActionTypes.filterPost,
    payload
  }
}

export const addPost = (post: Post) => {
  // console.log(post)
  return{
    type: ActionTypes.addPost,
    payload: post
  }
}
