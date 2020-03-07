import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

const Dialogs = (props) => {
  const handleSubmitNewMessageForm = message => {
    props.addMessage(message);
    props.reset(props.newMessageFormName)
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsItems.map((dialog) => <DialogsItem
          name={dialog.name}
          id={dialog.id}
          key={dialog.id}
          avaUrl={dialog.avaUrl}
        />)}
      </div>
      <div className={classes.messages}>
        <div>
          {props.messages.map((message) => <Message text={message.text} key={message.id}/>)}
        </div>
        <div className={classes.addMessage}>
          <NewMessageForm onSubmit={handleSubmitNewMessageForm}/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs