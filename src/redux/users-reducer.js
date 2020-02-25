import api from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_STATE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
  usersData: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  window.state = state;
  switch (action.type) {
    case FOLLOW: return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW: return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: return {...state, usersData: action.users};
    case SET_TOTAL_USERS_COUNT: return {...state, totalUsersCount: action.totalUsersCount};
    case SET_CURRENT_PAGE: return {...state, currentPage: action.currentPage};
    case TOGGLE_IS_FETCHING: return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return action.isInProgress ?
        {...state, isFollowingInProgress: [...state.isFollowingInProgress, action.userId]} :
        {...state, isFollowingInProgress: state.isFollowingInProgress.filter((id) => id !== action.userId)}
    default: return state;
  }
}

const displayFollow = (userId) => {
  return {
    type: FOLLOW,
    id: userId
  }
}

const displayUnfollow = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId
  }
}

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
}

const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

const toggleIsFollowingInProgress = (isInProgress, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isInProgress,
    userId
  }
}

export const getUsersData = (pageSize, currentPage) => (dispatch) => { //thunk creator
  dispatch(toggleIsFetching(true));
  api.get('users', pageSize, currentPage).then(response => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setCurrentPage(currentPage));
  })
}

export const follow = (id) => (dispatch) => { //thunk creator
  dispatch(toggleIsFollowingInProgress(true, id))
  api.post('follow', id).then(response => {
    if (response.resultCode === 0) dispatch(displayFollow(id))
    dispatch(toggleIsFollowingInProgress(false, id))
  })
}

export const unfollow = (id) => (dispatch) => { // thunk creator
  dispatch(toggleIsFollowingInProgress(true, id))
  api.delete('follow', id).then(response => {
    if (response.resultCode === 0) dispatch(displayUnfollow(id))
    dispatch(toggleIsFollowingInProgress(false, id))
  })
}

export default usersReducer