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
    case SET_AUTH_DATA: return {...state, ...action.authData, isAuth: true};
    case SET_IS_FETCHING: return {...state, isFetching: action.isFetching};
    case SET_AUTH_USER_PROFILE: return {...state, authUserProfile: action.authUserProfile};
    default: return state;
  }
}

export const setAuthData = (id, login, email) => {
  return {
    type: SET_AUTH_DATA,
    authData: {id, login, email}
  }
}

export const setIsFetching = (isFetching) => {
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

export default authReducer;