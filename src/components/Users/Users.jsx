import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";
import PaginationControlled from "../common/Pagination/PaginationMUI";

const Users = (props) => {
  return (
    <div className={classes.usersContainer}>
      {/*<Pagination*/}
      {/*  totalCount={props.totalUsersCount}*/}
      {/*  pageSize={props.pageSize}*/}
      {/*  currentPage={props.currentPage}*/}
      {/*  handlePageNumClick={props.handlePageNumClick}*/}
      {/*  currentPagesIntervalSize={10}*/}
      {/*/>*/}
      <PaginationControlled
        totalCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />
      <div className={classes.usersItemsWrap}>
        {props.isFetching ? <Preloader/> : null}
        {props.users.map(u => {
          return <User
            id={u.id}
            key={u.id}
            name={u.name}
            smallPhoto={u.photos.small}
            followed={u.followed}
            status={u.status}
            country={"u.location.country"}
            city={"u.location.city"}
            follow={props.follow}
            unfollow={props.unfollow}
            isFollowingInProgress={props.isFollowingInProgress}
            toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
          />
        })}
      </div>
    </div>
  )
}

export default Users