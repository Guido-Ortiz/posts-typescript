import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { useNavigate } from 'react-router-dom';
import { addPost, Post } from '../../redux/actions/action-creators';
import Navbar from '../Navbar/Navbar';

const Form = () => {
    const navigate = useNavigate()

    // const [post, setPost] = React.useState<Post | {}>();
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
    //   navigate('/posts')
    };

    const dispatch: Dispatch<any> = useDispatch();

    const saveArticle = useCallback(
        (post: Post) => dispatch(addPost(post)),
        [dispatch]
      );

    return (
        <>
            <Navbar />
            <div>Form</div>
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

        </>
    )
}

export default Form