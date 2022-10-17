import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <h3>mis posts</h3>
        <Link to='crear'>
            <h4>crear nuevo post</h4>
        </Link>
    </div>
  )
}

export default Navbar