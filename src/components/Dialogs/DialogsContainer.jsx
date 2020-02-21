import React from 'react'
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogs.dialogsItems,
    messages: state.dialogs.messages,
    addMessageBtnText: state.dialogs.addMessage.btnText,
    messageValue: state.dialogs.messageValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(addMessageActionCreator())},
    changeMessageValue: (text) => {dispatch(changeMessageValueActionCreator(text))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer