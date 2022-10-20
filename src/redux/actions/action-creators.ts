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
export interface ResetPostsAction {
  type: ActionTypes.resetPosts;
}

const url = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = () => {
  return async (dispatch:  Dispatch) => {
    try{

      const response = await axios.get<Post[]>(url);
      dispatch<FetchPostAction>({
        type: ActionTypes.fetchPosts,
        payload: response.data
      })
    }
    catch(e){
      console.log(e)
    }
  }
};

export const deletePost = (id: number): DeletePostAction => {
  return {
    type: ActionTypes.deletePost,
    payload: id
  };
};

export const resetPosts = () => {
  return {
    type: ActionTypes.resetPosts
  }
}
