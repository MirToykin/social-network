import api from "../api/api";
import {setAuthUserProfile} from "./auth-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const SAVE_PROFILE_DATA_SUCCESS = 'SAVE_PROFILE_DATA_SUCCESS';

let initialState = {
  postsData: [
    {id: 1, text: 'This is my first post!', likesCount: 14, date: 1586384418271},
    {id: 2, text: 'Congratulations', likesCount: 10, date: 1586384633833},
    {id: 3, text: 'Thanks', likesCount: 11, date: 1586385036150},
  ],
  userProfile: null,
  profileStatus: '',
  newPostFormName: 'newPostForm'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postValue: '',
        postsData: [...state.postsData, {id: Date.now(), text: action.post.postText, likesCount: 0, date: Date.now()}]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.status
      }
    case SAVE_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        userProfile: action.userProfile
      }
    default:
      return state;
  }
}

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  }
}

const setProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status
  }
}

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
}

const saveProfileDataSuccess = (userProfile) => {
  return {
    type: SAVE_PROFILE_DATA_SUCCESS,
    userProfile
  }
}

export const getUserProfile = (userId) => async (dispatch) => { //thunk creator
  try {
    const response = await api.get('profile', null, null, userId)
    dispatch(setUserProfile(response));
  } catch (err) {
    console.log(err)
  }
}

export const getStatus = (id) => async (dispatch) => {
  try {
    const response = await api.get('profile/status', null, null, id)
    dispatch(setProfileStatus(response));
  } catch (err) {
    console.log(err)
  }
}

export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await api.put('profile/status', {status})
    if (response.data.resultCode === 0) {
      dispatch(setProfileStatus(status))
    }
  } catch (err) {
    console.log(err)
  }
}

export const savePhoto = (photoFile) => async (dispatch, getState) => {
  try {
    const response = await api.put('profile/photo', photoFile)
    if (response.resultCode === 0) {
      const userProfile  = {
        ...getState().profile.userProfile,
        photos: response.data.photos
      }
      dispatch(saveProfileDataSuccess(userProfile));
      dispatch(setAuthUserProfile(userProfile))
    }
  } catch (err) {
    console.log(err)
  }
}

export const saveProfileDescription = (profileData) => async (dispatch) => {
  try {
    const response = await api.put('profile', profileData)
    if (response.resultCode === 0) {
      dispatch(saveProfileDataSuccess(profileData));
    }
  } catch (err) {
    console.log(err)
  }
}

export default profileReducer