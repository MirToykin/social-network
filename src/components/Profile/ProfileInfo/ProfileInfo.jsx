import React from 'react'
import classes from './ProfileInfo.module.css'
import userPhoto from '../../../assets/imgs/user.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({userProfile, updateStatus, status, authId, savePhoto}) => {
  const contacts = userProfile.contacts;
  let isContacts = false;
  const contactsElems = [];
  const isOwner = authId === userProfile.userId;

  const handleFileChoice = (e) => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  }

  for(let key in contacts) {
    if(contacts[key]) {
      contactsElems.push(
        <p key={key}><span>{key}</span>: {contacts[key]}</p>
      );
      if (!isContacts) isContacts = true;
    }
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avaContainer}>
          <div><img src={userProfile.photos.large ? userProfile.photos.large : userPhoto} alt='avatar'/></div>
          {isOwner && <div><input type="file" onChange={handleFileChoice}/></div>}
        </div>
        <div>
          <h2>{userProfile.fullName}</h2>
          <div className={classes.aboutMe}>
            {userProfile.aboutMe ? <><h4>About me:</h4><p>{userProfile.aboutMe}</p></> : null}
          </div>
          <div className={classes.contacts}>
            {isContacts ? <h4>My contacts:</h4> : null}
            {contactsElems}
          </div>

        </div>
      </div>
      <div>
        <ProfileStatus
          updateStatus={updateStatus}
          status={status}
          isOwner={isOwner}/>
      </div>
    </div>
  )
}

export default ProfileInfo