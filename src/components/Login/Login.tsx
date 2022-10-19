import React from 'react';
import Navbar from '../Navbar/Navbar';
import s from './Login.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Login = () => {
    // const navigate = useNavigate()

    // const [post, setPost] = useState({
    //     userId: 0,
    //     title: '',
    //     body: '',
    //     id: 0
    // });

    // const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    //     setPost({
    //       ...post,
    //       [e.currentTarget.name]: e.currentTarget.value
    //     });
    //   };
 
    // const addNewArticle = (e: React.FormEvent) => {
    //   e.preventDefault();
    //   saveArticle(post);
    // //   navigate('/posts')
    // };

    // const dispatch: Dispatch = useDispatch();

    // const saveArticle = useCallback(
    //     (post: Post) => dispatch(addPost(post)),
    //     [dispatch]
    //   );

    return (
        <>
            <Navbar />
            <Breadcrumb />
            {/* <div>Form</div>
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
            </form> */}
            <div className={s.login}>
                <div className={s.login__container}>
                    <h2>Login</h2>
                    <input type='text' placeholder='Nombre de usuario...'/>
                    <input type='password' placeholder='Contraseña' />
                    <button className={s.login__button}>Login</button>
                </div>
            </div>

        </>
    )
}

export default Login