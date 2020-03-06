import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";

const mapDispatchToProps = dispatch => {
  return {
    logIn: (loginData) => dispatch(logIn(loginData))
  }
}

export default connect(null, mapDispatchToProps)(Login);