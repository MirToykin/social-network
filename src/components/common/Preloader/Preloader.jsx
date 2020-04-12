import React from "react";
import classes from './Preloader.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  preloader: {
    position: 'fixed',
    width: theme.spacing(5),
    height: theme.spacing(5),
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  }
}))

const Preloader = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.preloader}>
      <CircularProgress/>
    </div>
  )
}

export default Preloader