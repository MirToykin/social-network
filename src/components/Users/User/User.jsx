import React from "react";
import classes from './User.module.css'
import userPhoto from '../../../assets/imgs/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
  let follow = (id) => {
    axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + id, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "a5a2c387-e5c5-41da-a00a-1e342607940a"
      }
    }).then(response => {
      if (response.data.resultCode === 0) {{
        props.follow(id)
      }}
    })
  }

  let unfollow = (id) => {
    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + id, {
      withCredentials: true,
      headers: {
        "API-KEY": "a5a2c387-e5c5-41da-a00a-1e342607940a"
      }
    }).then(response => {
      if (response.data.resultCode === 0) {{
        props.unfollow(id)
      }}
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