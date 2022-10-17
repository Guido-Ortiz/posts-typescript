// import { CircularProgress } from '@mui/material';
// import React from 'react';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { Post, fetchPosts, deletePost } from '../../redux/actions/action-creators';
// import { StoreState } from '../../redux/reducers/reducer';
// import PostCard from '../PostCard/PostCard';
// import s from './Posts.module.css';


// interface AppProps {
//     posts: Post[];
//     fetchPosts(): any;
//     deletePost: typeof deletePost;
// }

// const Posts = (props: AppProps) => {

//     return (
//         <>
//             <button onClick={props.fetchPosts}>FETCH POSTS!</button>
//             <div className={s.posts}>

//             {
//                 props.posts.map((post: Post) => {
//                     return (
//                         <div key={post.id}>
//                             <PostCard id={post.id}
//                                 userId={post.userId}
//                                 title={post.title}
//                                 body={post.body} />
//                         </div>
//                     )
//                 })
//             }
//             </div>
//         </>
//     )
// }

// const mapStateToProps = (state: StoreState): { posts: Post[] } => {
//     return {
//         posts: state.posts
//     };
// }

// export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts)







import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Post, fetchPosts, deletePost } from '../../redux/actions/action-creators';
import { StoreState } from '../../redux/reducers/reducer';
import PostCard from '../PostCard/PostCard';
import s from './Posts.module.css';


interface AppProps {
    posts: Post[];
    fetchPosts(): any;
    deletePost: typeof deletePost;
}

const Posts = (props: AppProps) => {

    useEffect(() => {
        { props.fetchPosts() }
    }, [])

    if (props.posts.length === 0) return <CircularProgress />

    return (
        <>
            <div className={s.posts}>
                {
                    props.posts.map((post: Post) => {
                        return (
                            <div key={post.id} className={s.postcard}>
                                <PostCard id={post.id}
                                        userId={post.userId}
                                        title={post.title}
                                        body={post.body} 
                                         />
                                <button onClick={() => props.deletePost(post.id)}>X</button>      
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

const mapStateToProps = (state: StoreState): { posts: Post[] } => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts)
