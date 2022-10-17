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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Landing />} />
            
          <Route path='/posts' element={<Home />} />

          <Route path='posts/crear' element={<Form />} />

        </Routes>
          {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}



export default App
