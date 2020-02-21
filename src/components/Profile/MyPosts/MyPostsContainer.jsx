import React from 'react'
import {
  addPostActionCreator,
  changePostValueActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapSateToProps = (state) => {
  return {
    posts: state.profile.postsData,
    addPostBtnText: state.profile.addPost.btnText,
    postValue: state.profile.postValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreator())},
    changePostValue: (text) => {dispatch(changePostValueActionCreator(text))}
  }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer