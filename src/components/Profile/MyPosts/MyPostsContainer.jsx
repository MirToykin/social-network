import React from 'react'
import {addPost, clickLike} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {reset} from 'redux-form';
import MyPosts from "./MyPosts";

const mapSateToProps = state => {
  return {
    posts: state.profile.postsData.sort((a, b) => b.date - a.date),
    newPostFormName: state.profile.newPostFormName,
    avatar: state.auth.authUserProfile.photos.small,
    authUser: state.auth.authUserProfile.fullName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    reset: (formName) => dispatch(reset(formName)),
    clickLike: (id) => dispatch(clickLike(id))
  }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer