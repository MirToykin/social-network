import React from "react";
import {connect} from "react-redux";
import {
  follow, setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.getUsersData(this.props.pageSize, this.props.currentPage);
  }

  getUsersData(pageSize, currentPage) {
    this.props.toggleIsFething(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        this.props.toggleIsFething(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
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
    isFetching: state.users.isFetching
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {dispatch(follow(userId))},
//     unfollow: (userId) => {dispatch(unfollow(userId))},
//     setUsers: (users) => {dispatch(setUsers(users))},
//     setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCount(totalUsersCount))},
//     setCurrentPage: (currentPage) => {dispatch(setCurrentPage(currentPage))},
//     toggleIsFething: (isFetching) => {dispatch(toggleIsFetching(isFetching))}
//   }
// }

export default connect(mapStateToProps, {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
})(UsersContainer)