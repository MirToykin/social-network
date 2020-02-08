import React from 'react'
import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export  default DialogsItem