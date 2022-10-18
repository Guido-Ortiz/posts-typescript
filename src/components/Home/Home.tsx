import React from 'react';
import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';
import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={s.home}>
          {/* <Sidebar /> */}
          <Posts />
      </div>
    </>
  )
}

export default Home