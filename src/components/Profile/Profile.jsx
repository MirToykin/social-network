import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' alt='image' />
      </div>
      <div className={classes.underImg}>
        <div className=''>
          ava + descr
        </div>
        <MyPosts />
      </div>



    </div>
  )
}

export default Profile