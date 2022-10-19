import React from 'react';
import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={s.home}>
          <Posts />
      </div>
    </>
  )
}

export default Home