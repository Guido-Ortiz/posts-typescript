import React from 'react';
import { Post } from '../../redux/actions/action-creators';
import s from './PostCard.module.css';



const PostCard: React.FC<Post> = ({ id, userId, title, body }) => {
  return (
    <div className={s.card}>
      <div className={s.card__titulo}>{title}</div>
      <div className={s.card__cuerpo}>{body}</div>
      <div className={s.card__usuario}>{userId}</div>
      {/* <button onClick={() => props.deletePost(post.id)}>X</button> */}
    </div>
  )
}

export default PostCard