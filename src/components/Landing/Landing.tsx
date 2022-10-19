import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import s from './Landing.module.css';

const Landing = () => {
  return (
    <div className={s.landing}>
      <Navbar />
      <div className={s.landing__container}>
        <h2 className={s.landing__title}>MyPostsApp</h2>
        <p className={s.landing__description}>Challenge tecnico Cleverpy .</p>
        <Link to='/posts'>
            <button>Ver Posts</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing