import api from "../api/api";

const ADD_POST = 'ADD_POST';
const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  postsData: [
    {id: 1, text: 'This is my first post!', likesCount: 14},
    {id: 2, text: 'Congratulations', likesCount: 10},
    {id: 3, text: 'Thanks', likesCount: 11},
  ],
  addPost: {
    btnText: 'Add Post'
  },
  postValue: '',
  userProfile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: return {
        ...state,
        postValue: '',
        postsData: [...state.postsData, {id: 5, text: state.postValue, likesCount: 0}]
      }
    case CHANGE_POST_VALUE: return {
        ...state,
        postValue: action.value
      }
    case SET_USER_PROFILE: return {
      ...state,
      userProfile: action.userProfile
    }
    default:
      return state;
  }
}

export const addPost = () => {
  return {
    type: ADD_POST
  }
}

export const changePostValue = (value) => {
  return {
    type: CHANGE_POST_VALUE,
    value
  }
}

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
}

export const getUserProfile = (userId = 6004) => (dispatch) => { //thunk creator
  api.get('profile', null, null, userId)
    .then(response => {
      dispatch(setUserProfile(response));
    })
}

export default profileReducer