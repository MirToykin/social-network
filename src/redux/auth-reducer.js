import api from "../api/api";
import {SubmissionError} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  authUserProfile: null,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {...state, ...action.authData};
    case SET_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case SET_AUTH_USER_PROFILE:
      return {...state, authUserProfile: action.authUserProfile};
    case SET_CAPTCHA_URL:
      return {...state, captchaUrl: action.url}
    default:
      return state;
  }
}

export const setAuthData = (id, login, email, isAuth) => {
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

export const setAuthUserProfile = (authUserProfile) => {
  return {
    type: SET_AUTH_USER_PROFILE,
    authUserProfile
  }
}

const setCaptchaUrl = (url) => {
  return {
    type: SET_CAPTCHA_URL,
    url
  }
}

export const getAuth = () => async (dispatch) => {
  dispatch(setIsFetching(true));
  const authResponse = await api.get('auth/me');

  if (authResponse.resultCode === 0) {

    const {id, login, email} = authResponse.data;
    dispatch(setAuthData(id, login, email, true));

    const userResponse = await api.get('profile', null, null, id)
    dispatch(setAuthUserProfile(userResponse));
    dispatch(setIsFetching(false));

  } else {
    dispatch(setIsFetching(false));
  }
  return authResponse;
}

export const logIn = (loginData) => async (dispatch) => {
  const response = await api.post('auth/login', null, loginData);

  if (response.resultCode === 0) {
    dispatch(getAuth());
    dispatch(setCaptchaUrl(null))
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }

    let message = response.messages.length ? response.messages[0] : 'Something went wrong...'
    throw new SubmissionError({
      _error: message
    })
  }
}

export const logOut = () => async (dispatch) => {
  const response = await api.delete('auth/login');

  if (response.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
    dispatch(setAuthUserProfile(null));
  }

}

const getCaptchaUrl = () => async (dispatch) => {
  const response = await api.get('security/get-captcha-url');
  dispatch(setCaptchaUrl(response.url))
}

export default authReducer;