import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth-reducer";
import {setUserProfile} from "../../redux/profile-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => dispatch(getAuth()),
    // setUserProfile: (profile) => dispatch(setUserProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)