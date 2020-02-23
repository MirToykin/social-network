import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, setAuthUserProfile, setIsFetching} from "../../redux/auth-reducer";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(authResponse => {
      this.props.setIsFetching(false);
      if (authResponse.data.resultCode === 0) {
        let {id, login, email} = authResponse.data.data;
        this.props.setAuthData(id, login, email);
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + id, {
          withCredentials: true
        }).then(userResponse => {
            this.props.setAuthUserProfile(userResponse.data);
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