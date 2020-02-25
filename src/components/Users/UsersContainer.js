import React from "react";
import {connect} from "react-redux";
import {follow, getUsersData, unfollow} from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersData(this.props.pageSize, this.props.currentPage);
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
        handlePageNumClick={this.props.getUsersData}
        isFetching={this.props.isFetching}
        isFollowingInProgress={this.props.isFollowingInProgress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
    totalUsersCount: state.users.totalUsersCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    isFollowingInProgress: state.users.isFollowingInProgress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {dispatch(follow(id))},
    unfollow: (id) => dispatch(unfollow((id))),
    getUsersData: (pageSize, currentPage) => dispatch(getUsersData(pageSize, currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)