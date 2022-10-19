import React from 'react';
import { Post } from '../../redux/actions/action-creators';
import s from './Post.module.css';


const PostCard: React.FC<Post> = ({ id, userId, title, body }) => {
  return (
    <div className={s.card}>
      <div className={s.card__title}>{title}</div>
      <div className={s.card__body}>{body}</div>
      <div className={s.card__user}>User: {userId}</div>
    </div>
  )
}

export default PostCard