import React from 'react';
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import MenuAppBar from "./HeaderMUI";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const HeaderContainer = props => {
  return (
    <MenuAppBar {...props}/>
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

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(HeaderContainer)