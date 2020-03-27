import React from 'react';
import classes from './ProfliePhoto.module.css'
import userPhoto from "../../../../assets/imgs/user.png";

const ProfilePhoto = ({isOwner, userProfile, savePhoto}) => {

  const handleFileChoice = (e) => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  }

  return (
    <div className={classes.photoContainer}>
      <div><img src={userProfile.photos.large ? userProfile.photos.large : userPhoto} alt='avatar'/></div>
      {isOwner && <div><input type="file" onChange={handleFileChoice}/></div>}
    </div>
  );
};

export default ProfilePhoto;
