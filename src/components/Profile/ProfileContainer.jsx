import React, {useEffect} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

function ProfileContainer(props) {
  useEffect(() => {
    let id = props.match.params.userId;

      if(!id) {
        id = props.loggedInUserId;
        if(!id) {
          props.history.push('/login')
          return;
        }
      }

      props.getUserProfile(id);
      props.getStatus(id);
  }, [props.loggedInUserId])

  if (!props.userProfile) {
    return <Preloader/>
  }
  return (
    <Profile
      userProfile={props.userProfile}
      status={props.status}
      updateStatus={props.updateStatus}
      authId={props.authId}
    />
  )
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

