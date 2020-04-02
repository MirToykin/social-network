import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
  const [page, setPage] = React.useState(1);
  const count = Math.ceil(totalCount/pageSize);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {currentPage}</Typography>
      <Pagination count={count} page={currentPage} onChange={handlePageNumClick} />
    </div>
  );
}