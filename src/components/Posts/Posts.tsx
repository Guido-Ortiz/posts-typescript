
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Post, fetchPosts, deletePost, resetPosts } from '../../redux/actions/action-creators';
import { StoreState } from '../../redux/reducers/reducer';
import PostCard from '../PostCard/Post';
import s from './Posts.module.css';

const Posts = () => {

    const dispatch: Dispatch<any> = useDispatch();
    
    const posts = useSelector((state: StoreState) => state.posts)

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchPosts())    
          }, 1000);
    }, [])


    useEffect(() => {
         return () => {dispatch(resetPosts())}
    }, [])

    const handleDelete = (id: number) => {
        dispatch(deletePost(id))
    }


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
                            <div key={post.id} className={s.post}>
                                <PostCard id={post.id}
                                    userId={post.userId}
                                    title={post.title}
                                    body={post.body}
                                />
                                <Tooltip title='Eliminar Post' sx={{color: '#4717f6', alignSelf:'flex-end'}}>
                                    <IconButton>
                                    <DeleteIcon  onClick={() => handleDelete(post.id)} />                               
                                    </IconButton>
                                </Tooltip>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Posts