import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNote from "../../AddNote/AddNote";

const MyPosts = (props) => {
  return (
    <div className={classes.myPosts}>
      <h3>my posts</h3>
      <div className={classes.newPost}>
        <AddNote
          btnText={props.addPostBtnText}
          noteText={props.postValue}
          addNote={props.addPost}
          changeNoteValue={props.changePostValue}
        />
      </div>
      <div className={classes.posts}>
        {props.posts.map((post) => <Post message={post.text} likeNum={post.likesCount} key={post.id}/>)}
      </div>
    </div>
  )
}

export default MyPosts