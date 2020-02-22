import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    userId = userId ? userId : 6004;
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
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