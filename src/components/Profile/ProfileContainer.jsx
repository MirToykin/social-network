import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import api from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 6004;
    api.get('profile', null, null, userId)
      .then(response => {
        this.props.setUserProfile(response);
      })
  }

  render() {
    if (!this.props.userProfile) {
      return  <Preloader/>
    }
    return (
      <Profile {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profile.userProfile
  }
}

const profileContainerWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(profileContainerWithUrlData)