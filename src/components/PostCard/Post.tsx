import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { deletePost, Post } from '../../redux/actions/action-creators';
import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './Post.module.css';


const PostCard: React.FC<Post> = ({ id, userId, title, body }) => {
 
  const dispatch: Dispatch<any> = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deletePost(id))
  }

  return (
    <div className={s.card}>
      <div className={s.card__title}>{title}</div>
      <div className={s.card__body}>{body}</div>
      <div className={s.card__user}>User: {userId}</div>
      <Tooltip title='Eliminar Post' sx={{ color: '#4717f6', alignSelf: 'flex-end' }}>
        <IconButton onClick={() => handleDelete(id)}>
          <DeleteIcon  />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default PostCard