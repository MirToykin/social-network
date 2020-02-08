import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  // console.log('props', props)
  return (
    <div className={classes.myPosts}>
      <h3>my posts</h3>
      <div className={classes.newPost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.postsData.map((post) => <Post message={post.text} likeNum={post.likesCount}/>)}
      </div>
    </div>
  )
}

export default MyPosts