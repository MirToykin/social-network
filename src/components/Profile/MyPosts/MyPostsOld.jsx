import React from 'react'
import classes from './MyPostsOld.module.css'
import Post from './Post/Post'
import NewPostForm from "./NewPostForm/NewPostFormOld";

const MyPostsOld = (props) => {
  const handleSubmitAddPostForm = (post) => {
    props.addPost(post);
    props.reset(props.newPostFormName)
  }
  return (
    <div className={classes.myPosts}>
      <h3>my posts</h3>
      <div className={classes.newPost}>
        <NewPostForm onSubmit={handleSubmitAddPostForm}/>
      </div>
      <div className={classes.posts}>
        {props.posts.map((post) => <Post message={post.text} likeNum={post.likesCount} key={post.id}/>)}
      </div>
    </div>
  )
}

export default MyPostsOld