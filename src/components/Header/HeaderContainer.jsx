import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, setAuthUserProfile, setIsFetching} from "../../redux/auth-reducer";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import api from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    api.get('auth/me').then(authResponse => {
      this.props.setIsFetching(false);
      if (authResponse.resultCode === 0) {
        let {id, login, email} = authResponse.data;
        this.props.setAuthData(id, login, email);
        api.get('profile', null, null, id).then(userResponse => {
            this.props.setAuthUserProfile(userResponse);
          })
      }
    })
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

export default connect(mapStateToProps,
  {setAuthData, setIsFetching, setAuthUserProfile, setUserProfile})(HeaderContainer)