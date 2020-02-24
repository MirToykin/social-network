import React from "react";
import {connect} from "react-redux";
import {
  follow, setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching, toggleIsFollowingInProgress,
  unfollow
} from "../../redux/users-reducer";
import api from "../../api/api";
import Users from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.getUsersData(this.props.pageSize, this.props.currentPage);
  }

  getUsersData(pageSize, currentPage) {
    this.props.toggleIsFetching(true);
    api.get('users', pageSize, currentPage).then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
      })
  }

  handlePageNumClick = (pageSize, currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.getUsersData(pageSize, currentPage)
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
        handlePageNumClick={this.handlePageNumClick}
        isFetching={this.props.isFetching}
        isFollowingInProgress={this.props.isFollowingInProgress}
        toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
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

export default connect(mapStateToProps, {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  toggleIsFollowingInProgress
})(UsersContainer)