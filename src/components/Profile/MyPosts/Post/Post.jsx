import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9iwvHxyuLDeTuguzQO57US-4ZInb1YrbBEmzk-GC7pDW8VLGY' alt='ava' /> {props.message}
      <div>like <span>{props.likeNum}</span></div>
    </div>
  )
}

export default Post