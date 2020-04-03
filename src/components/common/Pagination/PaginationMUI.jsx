import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled({totalCount, pageSize, currentPage, handlePageNumClick}) {
  const classes = useStyles();
  const count = Math.ceil(totalCount/pageSize);

  return (
    <div className={classes.root}>
      <Pagination count={count} page={currentPage} onChange={handlePageNumClick} />
    </div>
  );
}