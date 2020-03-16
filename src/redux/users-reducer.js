import api from "../api/api";
import {changeObjectInArray} from "../helpers/reducers-helpers";

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
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: changeObjectInArray(state.usersData, 'id', action.id, {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: changeObjectInArray(state.usersData, 'id', action.id, {followed: false})
      }
    case SET_USERS:
      return {...state, usersData: action.users};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return action.isInProgress ?
        {...state, isFollowingInProgress: [...state.isFollowingInProgress, action.userId]} :
        {...state, isFollowingInProgress: state.isFollowingInProgress.filter((id) => id !== action.userId)}
    default:
      return state;
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

export const requestUsersData = (pageSize, currentPage) => async (dispatch) => { //thunk creator
  try {
    dispatch(toggleIsFetching(true));
    const response = await api.get('users', pageSize, currentPage);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setCurrentPage(currentPage));
  } catch (err) {
    console.log(err)
  }
}

const followUnfollowFlow = async (dispatch, id, method, displayFollowState) => { //thunk creator
  try {
    dispatch(toggleIsFollowingInProgress(true, id))
    const response = await api[method]('follow', id);
    if (response.resultCode === 0) dispatch(displayFollowState(id))
    dispatch(toggleIsFollowingInProgress(false, id))
  } catch (err) {
    console.log(err)
  }
}

export const follow = (id) => async (dispatch) => { //thunk creator
  followUnfollowFlow(dispatch, id, 'post', displayFollow)
}

export const unfollow = (id) => async (dispatch) => { // thunk creator
  followUnfollowFlow(dispatch, id, 'delete', displayUnfollow)
}

export default usersReducer