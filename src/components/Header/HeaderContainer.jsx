import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";


const HeaderContainer = props => {
  return (
    <Header {...props}/>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)