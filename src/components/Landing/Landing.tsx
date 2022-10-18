import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import s from './Landing.module.css';

const Landing = () => {
  return (
    <div className={s.landing}>
      <Navbar />
      <div className={s.landing__container}>
        <h2>MyPostsApp</h2>
        <Link to='/posts'>
            <button>empezar</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing