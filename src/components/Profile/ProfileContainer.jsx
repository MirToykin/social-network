import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
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

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getUserProfile(userId))
  }
}

const profileContainerWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(profileContainerWithUrlData)