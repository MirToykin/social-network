import React, {useState} from 'react';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import classes from './ProfileDescription.module.css';
import ProfileEditReduxForm from "./ProfileEditForm/ProfileEditForm";

const ProfileDescription = ({userProfile, updateStatus, status, isOwner, saveProfileDescription}) => {
  const [editMode, setEditMode] = useState(false);

  const contacts = userProfile.contacts;
  let isContacts = false;
  const contactsElems = [];

  for (let key in contacts) {
    if (contacts[key]) {
      contactsElems.push(
        <p key={key}><span>{key}</span>: {contacts[key]}</p>
      );
      if (!isContacts) isContacts = true;
    }
  }

  const onSaveProfileDesc = (profileData) => {
    saveProfileDescription(profileData);
      setEditMode(false);
  }

  return (
    <> {editMode ? <ProfileEditReduxForm initialValues={userProfile} onSubmit={onSaveProfileDesc}/> :
      <div>
        <h2>{userProfile.fullName}</h2>
        <ProfileStatus
          updateStatus={updateStatus}
          status={status}
          isOwner={isOwner}/>
        <div className={classes.aboutMe}>
          {userProfile.aboutMe ? <><h4>About me:</h4><p>{userProfile.aboutMe}</p></> : null}
        </div>
        <div className={classes.lookingForAJob}>
          <span>Looking for a job:</span> {userProfile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        <div className={classes.lookingForAJobDescription}>
          {userProfile.lookingForAJob ? <>
            <span>Professional skills:</span> {userProfile.lookingForAJobDescription}</> : null}
        </div>
        <div className={classes.contacts}>
          {isContacts ? <h4>My contacts:</h4> : null}
          {contactsElems}
        </div>
        <button onClick={() => setEditMode(true)}>Edit profile</button>
      </div>}
    </>
  );
};

export default ProfileDescription;
