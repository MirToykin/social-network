import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      my posts
      <div className={classes.newPost}>
        my new post
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likeNum='15'/>
        <Post message='This is my first post' likeNum='20'/>
      </div>
    </div>
  )
}

export default MyPosts