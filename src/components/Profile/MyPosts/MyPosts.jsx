import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNote from "../../Dialogs/AddNote/AddNote";

const MyPosts = (props) => {
  // let textAreaElement = React.createRef();
  // let addPost = () => {
  //   let postText = textAreaElement.current.value;
  //   alert(postText);
  // }

  return (
    <div className={classes.myPosts}>
      <h3>my posts</h3>
      <div className={classes.newPost}>
        {/*<div>*/}
        {/*  <textarea ref={textAreaElement}></textarea>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <button onClick={addPost}>Add post</button>*/}
        {/*</div>*/}
        <AddNote state={props.state.addPost} addPost={props.addPost}/>
      </div>
      <div className={classes.posts}>
        {props.state.postsData.map((post) => <Post message={post.text} likeNum={post.likesCount}/>)}
      </div>
    </div>
  )
}

export default MyPosts