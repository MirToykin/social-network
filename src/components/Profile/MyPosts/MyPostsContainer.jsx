import React from 'react'
import {
  addPostActionCreator,
  changePostValueActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let changePostValue = (text) => {
    props.store.dispatch(changePostValueActionCreator(text))
  }

  return (
    <div>
      <MyPosts
        posts={state.profile.postsData}
        addPostBtnText={state.profile.addPost.btnText}
        postValue={state.profile.postValue}
        addPost={addPost}
        changePostValue={changePostValue}
      />
    </div>
  )
}

export default MyPostsContainer