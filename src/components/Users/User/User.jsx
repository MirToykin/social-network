import React from "react";
import classes from './User.module.css'
import userPhoto from '../../../assets/imgs/user.png'
import {NavLink} from "react-router-dom";
import api from "../../../api/api";

const User = (props) => {
  let follow = (id) => {
    api.post('follow', id).then(response => {
      if (response.resultCode === 0) props.follow(id)
    })
  }

  let unfollow = (id) => {
    api.delete('follow', id).then(response => {
      if (response.resultCode === 0) props.unfollow(id)
    })
  }

  return (
    <div className={classes.userCard}>
      <div className={classes.userCardLeft}>
        <div className={classes.avaContainer}>
          <NavLink to={'profile/' + props.id} ><img src={props.smallPhoto ? props.smallPhoto : userPhoto} alt={props.name}/></NavLink>
        </div>
        <div className={classes.buttonContainer}>
          {props.followed ?
            <button onClick={() => unfollow(props.id)}>Unfollow</button> :
            <button onClick={() => follow(props.id)}>Follow</button>
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