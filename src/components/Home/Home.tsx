import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <Navbar />
        <Breadcrumb />
      <div className={s.home}>
          <Posts />
      </div>
    </>
  )
}

export default Home