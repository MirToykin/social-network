import React from 'react'
import Grid from "@material-ui/core/Grid";
import defaultUserPhoto from "../../../../assets/imgs/user.png";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  top: {
    display: 'flex',
    alignItems: 'center'
  },
  middle: {}
}))

const Post = ({message, likeNum, avatar, authUser}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} className={classes.top}>
        <Avatar alt={authUser}
                src={avatar ? avatar : defaultUserPhoto}
                style={{marginRight: 16}}
        />
        <Typography variant='subtitle1'>{authUser}</Typography>
      </Grid>
      <Grid item item xs={12} className={classes.middle}>
        <Typography>
          {message}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IconButton size='small'>
          <ThumbUpAltIcon/>
        </IconButton>
        {likeNum}
      </Grid>
    </Grid>
  )
}

export default Post