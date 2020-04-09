import React from 'react'
import Grid from "@material-ui/core/Grid";
import defaultUserPhoto from "../../../../assets/imgs/user.png";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  top: {
    display: 'flex',
    alignItems: 'center'
  },
  middle: {},
  bottom: {},
  date: {
    fontSize: theme.spacing(1.5)
  },
  userName: {
    height: theme.spacing(2),
    marginBottom: theme.spacing(.5)
  },
  likeContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  likesCount: {
    fontWeight: 300,
    color: theme.palette.text.secondary
  },
  message: {
    fontSize: theme.spacing(1.75)
  }
}))

const Post = ({
                message, likeNum,
                avatar, authUser,
                date, clickLike,
                id, isLiked
}) => {
  const classes = useStyles();
  const months = {
    '0': 'January', '1': 'February', '2': 'March', '3': 'April',
    '4': 'May', '5': 'June', '6': 'Jule', '7': 'August',
    '8': 'September', '9': 'October', '10': 'November', '11': 'December'
  }
  const stringDate = `${months[new Date(date).getMonth().toString()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} className={classes.top}>
        <Avatar alt={authUser}
                src={avatar ? avatar : defaultUserPhoto}
                style={{marginRight: 16}}
        />
        <div>
          <Typography className={classes.userName} variant='subtitle1'>{authUser}</Typography>
          <Typography className={classes.date} color='textSecondary' variant='subtitle1'>{stringDate}</Typography>
        </div>
      </Grid>
      <Grid item item xs={12} className={classes.middle}>
        <Typography className={classes.message}>
          {message}
        </Typography>
      </Grid>
      <Grid className={classes.likeContainer} item xs={12}>
        <IconButton onClick={() => clickLike(id)} size='small'>
          {isLiked ? <FavoriteIcon color='secondary'/> : <FavoriteBorderIcon color='secondary'/>}
        </IconButton>
        <span className={classes.likesCount}>{likeNum}</span>
      </Grid>
    </Grid>
  )
}

export default Post