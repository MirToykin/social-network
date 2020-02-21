import React from "react";
import classes from './User.module.css'
import userPhoto from '../../../assets/imgs/user.png'

const User = (props) => {
  return (
    <div className={classes.userCard}>
      <div className={classes.userCardLeft}>
        <div className={classes.avaContainer}>
          <img src={props.smallPhoto ? props.smallPhoto : userPhoto} alt={props.name}/>
        </div>
        <div className={classes.buttonContainer}>
          {props.followed ?
            <button onClick={() => props.unfollow(props.id)}>Unfollow</button> :
            <button onClick={() => props.follow(props.id)}>Follow</button>
          }
        </div>
      </div>
      <div className={classes.userCardRight}>
        <div className={classes.name_and_status}>
          <h3 className={classes.fullName}>{props.name}</h3>
          <p className={classes.status}>{props.status}</p>
        </div>
        <div>
          <p className={classes.country}>{props.country},</p>
          <p className={classes.city}>{props.city}</p>
        </div>
      </div>
    </div>
  )
}

export default User