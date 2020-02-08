import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsData.map((dialog) => <DialogsItem name={dialog.name} id={dialog.id}/>)}
      </div>
      <div className={classes.messages}>
        {props.messagesData.map((message) => <Message text={message.text}/>)}
      </div>
    </div>
  )
}

export default Dialogs