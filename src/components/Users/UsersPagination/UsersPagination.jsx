import React from "react";
import classes from "./UsersPagination.module.css";

const UsersPagination = (props) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalUsersCount/props.pageSize); i++) {
    pages.push(<span
      className={props.currentPage === i ? classes.pageNum + ' ' + classes.active : classes.pageNum}
      onClick={() => props.handlePageNumClick(props.pageSize, i)}
    >{i}</span>)
  }
  return (
    <div className={classes.pageNumbersContainer}>
      {pages}
    </div>
  )
}

export  default UsersPagination