import React from 'react'
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form';

const mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogs.dialogsItems,
    messages: state.dialogs.messages,
    newMessageFormName:state.dialogs.newMessageFormName,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessageActionCreator(message)),
    reset: (formName) => dispatch(reset(formName))
  }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)