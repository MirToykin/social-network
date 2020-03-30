import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (loginData) => dispatch(logIn(loginData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);