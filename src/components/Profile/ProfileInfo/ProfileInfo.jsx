import React from 'react'
import classes from './ProfileInfo.module.css'
import userPhoto from '../../../assets/imgs/user.png'

const ProfileInfo = (props) => {
  const contacts = props.userProfile.contacts;
  let isContacts = false;
  const contactsElems = [];

  for(let key in contacts) {
    if(contacts[key]) {
      contactsElems.push(
        <p><span>{key}</span>: {contacts[key]}</p>
      );
      if (!isContacts) isContacts = true;
    }
  }
  return (
    <div>
      <div className={classes.imgContainer}>
        <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'
             alt='wallpaper'/>
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avaContainer}>
          <img src={props.userProfile.photos.large ? props.userProfile.photos.large : userPhoto} alt='avatar'/>
        </div>
        <div>
          <h2>{props.userProfile.fullName}</h2>
          <div className={classes.aboutMe}>
            {props.userProfile.aboutMe ? [<h4>About me:</h4>, <p>{props.userProfile.aboutMe}</p>] : null}
          </div>
          <div className={classes.contacts}>
            {isContacts ? <h4>My contacts:</h4> : null}
            {contactsElems}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo