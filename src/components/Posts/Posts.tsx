import { CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Post, fetchPosts, deletePost, addPost } from '../../redux/actions/action-creators';
import { StoreState } from '../../redux/reducers/reducer';
import PostCard from '../PostCard/PostCard';
import s from './Posts.module.css';

interface AppProps {
    posts: Post[];
    fetchPosts(): any;
    deletePost: typeof deletePost;
}

const Posts = (props: AppProps) => {

    

    const [post, setPost] = useState({
        userId: 0,
        title: '',
        body: '',
        id: 0
    });

    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();
        saveArticle(post);
        setPost({
            userId: 0,
            title: '',
            body: '',
            id: 0 
        })
        //   navigate('/posts')
    };

    const dispatch: Dispatch<any> = useDispatch();

    const saveArticle = useCallback(
        (post: Post) => dispatch(addPost(post)),
        [dispatch]
    );

    useEffect(() => {
        { props.fetchPosts() }
    }, [])

    if (props.posts.length === 0) return <CircularProgress />

    return (
        <>
            <form onSubmit={addNewArticle}>

                <input
                    type="text" name='title' value={post.title}
                    placeholder="Title"
                    onChange={handleArticleData}
                />
                <input
                    type="text" name='body' value={post.body}
                    placeholder="Body"
                    onChange={handleArticleData}
                />
                <input
                    type="number" name='userId' value={post.userId}
                    id="userId"
                    placeholder="UserId"
                    onChange={handleArticleData}
                />
                <button disabled={post === undefined ? true : false}>
                    Add post
                </button>
            </form>


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
