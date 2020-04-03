import React, {Fragment} from "react";
import Preloader from "../common/Preloader/Preloader";
import PaginationControlled from "../common/Pagination/PaginationMUI";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import UserCard from "./User/UserCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";

const Users = (props) => {
  const useStyles = makeStyles((theme) => ({
    list: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4
    },
    inline: {
      display: 'inline',
    },
    grid: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
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
      <Grid container justify="center" spacing={3} className={classes.grid}>
        <Grid item xs={12} sm={6} md={5}>
          <Paper>
            <List className={classes.list}>
              {props.isFetching ? <Preloader/> : null}
              {props.users.map((u, i) => {
                return <Fragment key={u.id}>
                  <UserCard
                    id={u.id}
                    status={u.status}
                    name={u.name}
                    smallPhoto={u.photos.small}
                    followed={u.followed}
                    status={u.status}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    isFollowingInProgress={props.isFollowingInProgress}
                    toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
                  />
                  {i !== props.users.length - 1 && <Divider variant="middle" component="li"/>}
                </Fragment>
              })}
            </List>
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={6} md={7}>
            <Paper><Typography variant='h6' color='secondary' align="center">Some content</Typography></Paper>
          </Grid>
        </Hidden>
      </Grid>
      <PaginationControlled
        totalCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />
    </div>
  )
}

export default Users