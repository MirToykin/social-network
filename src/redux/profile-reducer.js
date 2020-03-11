import api from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
  postsData: [
    {id: 1, text: 'This is my first post!', likesCount: 14},
    {id: 2, text: 'Congratulations', likesCount: 10},
    {id: 3, text: 'Thanks', likesCount: 11},
  ],
  userProfile: null,
  profileStatus: '',
  newPostFormName: 'newPostForm'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: return {
        ...state,
        postValue: '',
        postsData: [...state.postsData, {id: 5, text: action.post.postText, likesCount: 0}]
      }
    case SET_USER_PROFILE: return {
      ...state,
      userProfile: action.userProfile
    }
    case SET_PROFILE_STATUS: return {
      ...state,
      profileStatus: action.status
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

export const getUserProfile = (userId) => (dispatch) => { //thunk creator
  api.get('profile', null, null, userId)
    .then(response => {
      dispatch(setUserProfile(response));
    })
}

export const getStatus = (id) => (dispatch) => {
  api.get('profile/status', null, null, id)
    .then(response => {
      dispatch(setProfileStatus(response));
    })
}

export const updateStatus = (status) => (dispatch) => {
  api.put('profile/status', {status})
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
      }
    })
}

export default profileReducer