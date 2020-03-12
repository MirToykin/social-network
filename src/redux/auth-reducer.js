import api from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  authUserProfile: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {...state, ...action.authData};
    case SET_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case SET_AUTH_USER_PROFILE:
      return {...state, authUserProfile: action.authUserProfile};
    default:
      return state;
  }
}

const setAuthData = (id, login, email, isAuth) => {
  return {
    type: SET_AUTH_DATA,
    authData: {id, login, email, isAuth}
  }
}

const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching
  }
}

const setAuthUserProfile = (authUserProfile) => {
  return {
    type: SET_AUTH_USER_PROFILE,
    authUserProfile
  }
}

export const getAuth = () => (dispatch) => {
  dispatch(setIsFetching(true));
  return api.get('auth/me').then(authResponse => {
    if (authResponse.resultCode === 0) {
      let {id, login, email} = authResponse.data;
      dispatch(setAuthData(id, login, email, true));
      api.get('profile', null, null, id)
        .then(userResponse => {
          dispatch(setAuthUserProfile(userResponse));
          dispatch(setIsFetching(false));
        })
    } else {
      dispatch(setIsFetching(false));
    }
  })
}

export const logIn = (loginData) => (dispatch) => {
  api.post('auth/login', null, loginData)
    .then(response => {
      if(response.resultCode === 0) {
        dispatch(getAuth());
      } else {
        let message = response.messages.length ? response.messages[0] : 'Something went wrong...'
        dispatch(stopSubmit('login', {
          _error: message
        }))
      }
    })
}

export const logOut = () => (dispatch) => {
  api.delete('auth/login')
    .then(response => {
      if(response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
        dispatch(setAuthUserProfile(null));
      }
    })
}

export default authReducer;