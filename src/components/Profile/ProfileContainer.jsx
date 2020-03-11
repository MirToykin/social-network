import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;

    if(!id) {
      id = this.props.loggedInUserId;
      if(!id) {
        this.props.history.push('/login')
        return;
      }
    }

    this.props.getUserProfile(id);
    this.props.getStatus(id);
  }

  render() {
    if (!this.props.userProfile) {
      return  <Preloader/>
    }
    return (
      <Profile
        userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        authId={this.props.authId}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profile.userProfile,
    status: state.profile.profileStatus,
    authId: state.auth.id,
    loggedInUserId: state.auth.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getUserProfile(userId)),
    getStatus: (id) => dispatch(getStatus(id)),
    updateStatus: (status) => dispatch(updateStatus(status))
  }
}

export default compose(/*withAuthRedirect,*/
  connect(mapStateToProps,
    mapDispatchToProps))(ProfileContainer)

