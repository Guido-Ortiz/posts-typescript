// import React from 'react';
// import { connect } from 'react-redux';
// import { Post, fetchPosts, deletePost } from './redux/actions/action-creators';//../actions
// import { StoreState } from './redux/reducers/reducer';

// interface AppProps {
//   posts: Post[];
//   fetchPosts(): any;
//   deletePost: typeof deletePost;
// }

// function App(props:AppProps) {
//   console.log(props)
//   return (
//     <div>
//       <button onClick={props.fetchPosts}>FETCH POSTS!</button>
//       {
//         props.posts.map((post: Post) => {
//           return (
//             <div key={post.id}>
//               {post.id}) {post.userId} {post.title} {post.body}<button onClick={() => props.deletePost(post.id)}>X</button>
//             </div>
//           );
//         })
//       }
//     </div>
//   );
// }

// const mapStateToProps = (state: StoreState): {posts: Post[]} => {
//   return {
//     posts: state.posts
//   };
// }

// export default connect( mapStateToProps, { fetchPosts, deletePost })(App)






import React from 'react';
import Home from './components/Home/Home';



function App() {
  
  return (
    <div>
      <Home />
    </div>
  );
}



export default App
