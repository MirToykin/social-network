import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfoMUI";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        updateStatus={props.updateStatus}
        status={props.status}
        authId={props.authId}
        savePhoto={props.savePhoto}
        saveProfileDescription={props.saveProfileDescription}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile