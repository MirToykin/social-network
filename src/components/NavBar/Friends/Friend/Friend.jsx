import React from 'react';
import classes from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
  return (
    <NavLink to={'/' + props.id} className={classes.friend}>
      <div className={classes.avaContainer}>
        <img className={classes.ava} src={props.avaUrl} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </NavLink>
  )
}

export  default Friend