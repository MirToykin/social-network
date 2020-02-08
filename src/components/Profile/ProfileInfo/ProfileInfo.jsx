import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.imgContainer}>
        <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'
             alt='image'/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo