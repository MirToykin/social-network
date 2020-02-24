import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import UsersPagination from "./UsersPagination/UsersPagination";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
  return (
    <div className={classes.usersContainer}>
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
          />
        })}
      </div>
      <UsersPagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />
    </div>
  )
}

export default Users