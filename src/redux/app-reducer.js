import {getAuth} from "./auth-reducer";

const SET_INITIALIZE_SUCCESS = 'SET_INITIALIZE_SUCCESS';

let initialState = {
  isInitialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE_SUCCESS:
      return {...state, isInitialized: true};
    default:
      return state;
  }
}

export const setInitializedSuccess = () => {
  return {
    type: SET_INITIALIZE_SUCCESS
  }
}

export const initializeApp = () => async (dispatch) => {
   await dispatch(getAuth());
  dispatch(setInitializedSuccess());
}

export default appReducer;