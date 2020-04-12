import React, {useEffect} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfileDescription,
  setUserProfile,
  updateStatus
} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

function ProfileContainer(props) {
  let id = props.match.params.userId;

  useEffect(() => {
    if (!id) {
      id = props.authId;
      if (!id) {
        props.history.push('/login')
        return;
      }
    }

    if (props.authUserProfile && props.authUserProfile.userId === id) {
      props.setUserProfile(props.authUserProfile);
    } else {
      props.getUserProfile(id);
    }

    props.getStatus(id);

  }, [props.authId, id])

  if (!props.userProfile) {
    return <Preloader/>
  }
  return (
    <>
      {props.authUserProfile ? <Profile
        userProfile={props.userProfile}
        status={props.status}
        updateStatus={props.updateStatus}
        authId={props.authId}
        savePhoto={props.savePhoto}
        saveProfileDescription={props.saveProfileDescription}
      /> : <Preloader/>}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profile.userProfile,
    status: state.profile.profileStatus,
    authId: state.auth.id,
    authUserProfile: state.auth.authUserProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getUserProfile(userId)),
    getStatus: (id) => dispatch(getStatus(id)),
    updateStatus: (status) => dispatch(updateStatus(status)),
    setUserProfile: (userProfile) => dispatch(setUserProfile(userProfile)),
    savePhoto: (photoFile) => dispatch(savePhoto(photoFile)),
    saveProfileDescription: (profileData) => dispatch(saveProfileDescription(profileData))
  }
}

export default compose(/*withAuthRedirect,*/
  connect(mapStateToProps,
    mapDispatchToProps))(ProfileContainer)

