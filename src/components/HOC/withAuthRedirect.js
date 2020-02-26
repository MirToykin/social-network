import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const withAuthRedirect = (Component) => {
  const ComponentContainer = (props) => {
    if (!props.isAuth) return <Redirect to='/login'/>
    return <Component {...props} />
  }

  const ComponentContainerWithState = connect(mapStateToProps)(ComponentContainer)

  return ComponentContainerWithState
}

export default withAuthRedirect;