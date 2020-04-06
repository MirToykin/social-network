import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import userPhoto from "../../../assets/imgs/user.png";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: 'auto',
    borderRadius: 4
  },
  paper: {
    padding: theme.spacing(2)
  },
  outerBox: {
    position: 'relative',
    '&:hover $innerBox': {
      display: 'flex',
    },
  },
  innerBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'none',
    width: '100%',
    height: theme.spacing(5),
    backgroundColor: 'rgba(0, 0, 0, .5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
    boxSizing: 'border-box',
    borderRadius: '4px 4px 0 0'
  }
}));

const ProfilePhoto = ({userProfile, savePhoto, isOwner}) => {
  const classes = useStyles();

  const handleFileChoice = (e) => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  }

  return (
    <Paper className={classes.paper}>
      <Box className={classes.outerBox}>
        <Avatar
          className={classes.avatar}
          src={userProfile.photos.large ? userProfile.photos.large : userPhoto}
          alt={userProfile.fullName}
          variant="square"
        />
        {isOwner ? <Box className={classes.innerBox}>
          <input accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file" onChange={handleFileChoice}/>
          <label htmlFor="icon-button-file">
            <IconButton size='small' color="primary" component="span">
              <AddAPhotoIcon/>
            </IconButton>
          </label>
        </Box> : null}
      </Box>
    </Paper>
  );
};

export default ProfilePhoto;
