import React from 'react'
import {
  addPost,
  changePostValue
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



const MyPostsContainer = connect(mapSateToProps, {addPost, changePostValue})(MyPosts);

export default MyPostsContainer