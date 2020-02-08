import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

let postData = [
  {id: 1, text: 'This is my first post!', likesCount: 14},
  {id: 2, text: 'Congratulations', likesCount: 10},
  {id: 3, text: 'Thanks', likesCount: 11},
]

let posts = postData.map((item) => <Post message={item.text} likeNum={item.likesCount} key={item.id}/>)

const MyPosts = () => {
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
        {posts}
      </div>
    </div>
  )
}

export default MyPosts