import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Sidebar.module.css';
import { StoreState } from '../../redux/reducers/reducer';
import { filterUser } from '../../redux/actions/action-creators';

const Sidebar = () => {
  const posts = useSelector((state: StoreState) => state)
  const dispatch = useDispatch()

  let usuarios = Array.from(new Set(posts.posts.map(u => u.userId)))  
  
  // const handleUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   // dispatch(filterUser(e.target.value))
  //   // setCurrentPage(1)
  // }

  return (
    <div className={s.sidebar}>
      <label>Usuarios:</label>
      <select >
        <option value='all'>All</option>
        {
          usuarios.map((u, i) => (
            <option key={i} value={u}>{u}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Sidebar