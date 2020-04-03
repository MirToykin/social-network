import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {withStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    ul: {
      justifyContent: 'center'
    }
  }
}));

const StyledPagination = withStyles({
  ul: {
    justifyContent: 'center'
  },

})(Pagination);

export default function PaginationControlled({totalCount, pageSize, currentPage, handlePageNumClick}) {
  const classes = useStyles();
  const count = Math.ceil(totalCount/pageSize);

  return (
    <div className={classes.root}>
      <StyledPagination siblingCount={5} count={count} page={currentPage} onChange={handlePageNumClick} />
    </div>
  );
}