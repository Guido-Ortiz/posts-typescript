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

// export const addPost = (post: Post) => {
//   console.log(post)
//   return{
//     type: ActionTypes.addPost,
//     post
//   }
// }

export const addPost = (post: Post) => {
  // console.log(post)
  return{
    type: ActionTypes.addPost,
    payload: post
  }
}

// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article
//   };

  // return simulateHttpRequest(action);
// }

