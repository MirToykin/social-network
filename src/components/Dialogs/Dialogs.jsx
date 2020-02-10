import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import AddNote from "../AddNote/AddNote";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogs.dialogsData.map((dialog) => <DialogsItem
          name={dialog.name}
          id={dialog.id}
          avaUrl={dialog.avaUrl}
        />)}
      </div>
      <div className={classes.messages}>
        <div>
          {props.dialogs.messagesData.map((message) => <Message text={message.text}/>)}
        </div>
        <div className={classes.addMessage}>
          <AddNote
            btnText={props.dialogs.addMessage.btnText}
            noteText={props.dialogs.messageValue}
            add={props.methods.addMessage}
            change={props.methods.changeMessageValue}
          />
        </div>
      </div>
    </div>
  )
}

export default Dialogs