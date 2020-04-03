import React from "react";
// import classes from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import PaginationControlled from "../common/Pagination/PaginationMUI";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import UserCard from "./User/UserCard";

const Users = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.usersContainer}>
      <PaginationControlled
        totalCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />
      <List className={classes.root}>
        {props.isFetching ? <Preloader/> : null}
        {props.users.map(u => {
          return <>
            <UserCard
              id={u.id}
              status={u.status}
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
            <Divider variant="inset" component="li"/>
          </>
        })}
      </List>
    </div>
  )
}

export default Users