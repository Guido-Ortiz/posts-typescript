import React from 'react';
import Navbar from '../Navbar/Navbar';
import s from './Login.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Login = () => {
    
    return (
        <>
            <Navbar />
            <Breadcrumb />
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