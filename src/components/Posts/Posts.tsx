import { CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Post, fetchPosts, deletePost, addPost, editPost } from '../../redux/actions/action-creators';
import { StoreState } from '../../redux/reducers/reducer';
import PostCard from '../PostCard/Post';
import Form from '../Login/Login';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './Posts.module.css';

interface AppProps {
    posts: Post[];
    fetchPosts(): any;
    deletePost: typeof deletePost;
}

const Posts = (props: AppProps) => {

    const [open, setOpen] = useState(false)
    // console.log(open)

    const [post, setPost] = useState({
        userId: 0,
        title: '',
        body: '',
        id: 0
    });

    const [update, setUpdate] = useState({
        title: post.title
    })

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

    const handleClick = (id: number) => {
        console.log(open)
        setOpen(!open)
        console.log(open)
        if(open){
            let p = props.posts.filter(e => e.id === id)
            console.log(p)
        } 
        // return(
        //     <p>hola</p>
        // )
        console.log(id)
        // dispatch(editPost(id))
    }

    const handleInputChange = () => {
        console.log(update.title)
    }

    if (props.posts.length === 0) return <CircularProgress />

    return (
        <>
            <div className={s.posts}>
                {
                    props.posts.map((post: Post) => {
                        return (
                            <div key={post.id} className={s.post}>
                                <PostCard id={post.id}
                                    userId={post.userId}
                                    title={post.title}
                                    body={post.body}
                                />
                                <DeleteIcon  onClick={() => props.deletePost(post.id)} sx={{color: '#4717f6', alignSelf:'flex-end'}}/>                              
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
