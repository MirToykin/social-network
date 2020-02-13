import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNote from "../../AddNote/AddNote";
import {
  addPostActionCreator,
  changePostValueActionCreator
} from "../../../redux/profile-reducer";

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
        <AddNote
          btnText={props.profile.addPost.btnText}
          noteText={props.profile.postValue}
          dispatch={props.dispatch}
          addActionCreator={addPostActionCreator}
          changeValueActionCreator={changePostValueActionCreator}
        />
      </div>
      <div className={classes.posts}>
        {props.profile.postsData.map((post) => <Post message={post.text} likeNum={post.likesCount}/>)}
      </div>
    </div>
  )
}

export default MyPosts