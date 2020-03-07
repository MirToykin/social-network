import React from 'react'
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {reset} from 'redux-form';

const mapSateToProps = state => {
  return {
    posts: state.profile.postsData,
    newPostFormName: state.profile.newPostFormName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    reset: (formName) => dispatch(reset(formName))
  }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer