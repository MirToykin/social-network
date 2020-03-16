import React from "react";
import {connect} from "react-redux";
import {follow, requestUsersData, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
  getCurrentPage, getIsFollowingInProgress,
  getIsUsersFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersData
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsersData(this.props.pageSize, this.props.currentPage);
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        handlePageNumClick={this.props.requestUsersData}
        isFetching={this.props.isFetching}
        isFollowingInProgress={this.props.isFollowingInProgress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersData(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsUsersFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {dispatch(follow(id))},
    unfollow: (id) => dispatch(unfollow((id))),
    requestUsersData: (pageSize, currentPage) => dispatch(requestUsersData(pageSize, currentPage))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersContainer)