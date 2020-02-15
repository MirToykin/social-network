import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import AddNote from "../AddNote/AddNote";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsItems.map((dialog) => <DialogsItem
          name={dialog.name}
          id={dialog.id}
          avaUrl={dialog.avaUrl}
        />)}
      </div>
      <div className={classes.messages}>
        <div>
          {props.messages.map((message) => <Message text={message.text}/>)}
        </div>
        <div className={classes.addMessage}>
          <AddNote
            btnText={props.addMessageBtnText}
            noteText={props.messageValue}
            addNote={props.addMessage}
            changeNoteValue={props.changeMessageValue}
          />
        </div>
      </div>
    </div>
  )
}

export default Dialogs