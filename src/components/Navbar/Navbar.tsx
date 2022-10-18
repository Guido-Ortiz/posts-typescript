import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbar}>

      <Link to='/' style={{ textDecoration: 'none' }}>
        <h3 className={s.navbar__title}>MyPostsApp</h3>
      </Link>

      <div className={s.navbar__links}>
        <Link to='/posts' style={{ textDecoration: 'none' }}>
          <h4 className={s.navbar__text}>Home</h4>
        </Link>

        <Link to='/login'>
          <button className={s.navbar__button}>Login</button>
        </Link>
      </div>

      {/* <Link to='crear'>
            <h4>crear nuevo post</h4>
        </Link> */}

    </div>
  )
}

export default Navbar