import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import s from './Breadcrumb.module.css';

const Breadcrumb = () => {
  
    const location = useLocation()

    const [breadcrumb, setBreadcrumb] = useState<string>('/')

    useEffect(() => {
      setBreadcrumb(location.pathname.slice(1))
    }, [location])
    

  return (
    <div className={s.breadcrumb}>
        <h4>MyPostApp / </h4>
        <span> {breadcrumb}</span>
    </div>
  )
}

export default Breadcrumb