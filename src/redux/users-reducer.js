const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_STATE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  usersData: [],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false
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
    case TOGGLE_IS_FETCHING: return {...state, isFetching: action.isFetching}
    default: return state;
  }
}

export const follow = (userId) => {
  return {
    type: FOLLOW,
    id: userId
  }
}

export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users
  }
}

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  }
}

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
}

export default usersReducer