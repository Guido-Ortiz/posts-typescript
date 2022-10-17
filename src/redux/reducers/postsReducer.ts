import { Post } from '../actions/action-creators';
import { ActionTypes,  Action } from '../actions/action-types';

export const postsReducer = (state: Post[] = [], action: Action) => {
  switch (action.type) {

    case ActionTypes.fetchPosts:
      return action.payload;

    case ActionTypes.deletePost:
      return state.filter((post: Post) => post.id !== action.payload);

    case ActionTypes.addPost:
      console.log(action.payload)
      // const newPost = {
      //   userId: action.payload.userId,
      //   title: action.payload.title,
      //   body: action.payload.body
      //   // id: action.payload.id
      // }
      return state.concat(...state, [action.payload])
      
    default:
      return state;
  }
};






















// const postReducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_POST":
//       return state.concat([action.payload]);

//     case "DELETE_POST":
//       return state.filter(post => post.id !== action.payload);

//     case "EDIT_POST":
//       return state.map(post =>
//         post.id === action.payload ? { ...post, editing: !post.editing } : post
//       );
//     case "UPDATE":
//       return state.map(post => {
//         if (post.id === action.payload) {
//           console.log(action.payload);
//           return {
//             ...post,
//             title: action.data.newTitle,
//             message: action.data.newMessage,
//             editing: !post.editing
//           };
//         } else return post;
//       });

//     default:
//       return state;
//   }
// };
// export default postReducer;







