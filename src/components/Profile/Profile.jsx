import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfoMUI";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  const isOwner = props.authId === props.userProfile.userId;
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        updateStatus={props.updateStatus}
        status={props.status}
        authId={props.authId}
        savePhoto={props.savePhoto}
        saveProfileDescription={props.saveProfileDescription}
        isOwner={isOwner}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile