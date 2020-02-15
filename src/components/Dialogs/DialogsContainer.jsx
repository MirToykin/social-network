import React from 'react'
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let changeMessageValue = (text) => {
    props.store.dispatch(changeMessageValueActionCreator(text))
  }

  return (
    <div>
      <Dialogs
        dialogsItems={state.dialogs.dialogsItems}
        messages={state.dialogs.messages}
        addMessageBtnText={state.dialogs.addMessage.btnText}
        messageValue={state.dialogs.messageValue}
        addMessage={addMessage}
        changeMessageValue={changeMessageValue}
      />
    </div>
  )
}

export default DialogsContainer