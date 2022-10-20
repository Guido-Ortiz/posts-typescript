import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { CircularProgress } from '@mui/material';

import { Post, fetchPosts, resetPosts } from '../../redux/actions/action-creators';
import { StoreState } from '../../redux/reducers/reducer';
import PostCard from '../PostCard/Post';
import s from './Posts.module.css';


const Posts = () => {

    const dispatch: Dispatch<any> = useDispatch();

    const posts = useSelector((state: StoreState) => state.posts.posts)

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchPosts())    
          }, 1000);
    }, [])


    useEffect(() => {
         return () => {dispatch(resetPosts())}
    }, [])

    if (posts.length === 0) return (
        <div className={s.post__loader}>
            <div>
                <CircularProgress sx={{color: '#4717f6'}}/>
            </div>    
        </div>
    )

    return (
        <>
            <div className={s.posts}>
                {
                    posts.map((post: Post) => {
                        return (
                                <div key={post.id}>
                                    <PostCard id={post.id}
                                        userId={post.userId}
                                        title={post.title}
                                        body={post.body} />                                
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Posts