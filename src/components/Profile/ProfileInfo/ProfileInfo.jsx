import React from 'react'
import classes from './ProfileInfo.module.css'
import ProfilePhoto from "./ProfilePhoto/ProfliePhoto";
import ProfileDescription from "./ProfielDescription/ProfileDescription";
import Grid from "@material-ui/core/Grid";

const ProfileInfo = ({userProfile, updateStatus, status, authId, savePhoto, saveProfileDescription}) => {
  const isOwner = authId === userProfile.userId;

  return (
    <div className={classes.descriptionBlock}>
      <ProfilePhoto isOwner={isOwner} userProfile={userProfile} savePhoto={savePhoto}/>
      <ProfileDescription userProfile={userProfile}
                          isOwner={isOwner}
                          status={status}
                          updateStatus={updateStatus}
                          saveProfileDescription={saveProfileDescription}
      />
    </div>
  )
}

export default ProfileInfo