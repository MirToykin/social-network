export const getUsersData = state => {
  return state.users.usersData;
}

export const getTotalUsersCount = state => {
  return state.users.totalUsersCount;
}

export const getPageSize = state => {
  return state.users.pageSize;
}

export const getCurrentPage = state => {
  return state.users.currentPage;
}

export const getIsUsersFetching = state => {
  return state.users.isFetching;
}

export const getIsFollowingInProgress = state => {
  return state.users.isFollowingInProgress;
}