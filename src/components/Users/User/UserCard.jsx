import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import {NavLink} from "react-router-dom";
import Menu from "@material-ui/core/Menu/Menu";
import Button from "@material-ui/core/Button";
import userPhoto from "../../../assets/imgs/user.png";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    // marginRight: theme.spacing(3)
  }
}));

export default function UserCard({
                                   followed,
                                   isFollowingInProgress,
                                   unfollow, follow, id,
                                   smallPhoto, name, status
                                 }) {
  const classes = useStyles();
  const [anchorEl, setAncorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleUser = (event) => {
    setAncorEl(event.currentTarget)
  }

  const handleUserClose = () => {
    setAncorEl(null);
  }

  const handleFollow = (id) => {
    follow(id);
    handleUserClose();
  }

  const handleUnfollow = (id) => {
    unfollow(id);
    handleUserClose();
  }

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <IconButton
          edge="end"
          className={classes.menuButton}
          onClick={handleUser}
        >
          <Avatar src={smallPhoto ? smallPhoto : userPhoto}
                  alt={name}
                  className={classes.avatar}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl} // элемент рядом с которым будет отображено меню
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleUserClose}
        >
          {followed ?
            <MenuItem disabled={isFollowingInProgress.some((id) => id === id)}
                      onClick={() => handleUnfollow(id)}>Unfollow</MenuItem> :
            <MenuItem disabled={isFollowingInProgress.some((id) => id === id)}
                      onClick={() => handleFollow(id)}>Follow</MenuItem>
          }
          <MenuItem onClick={handleUserClose}
                    component={NavLink}
                    to={`/profile/${id}`}
          >Go to account</MenuItem>

        </Menu>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {status}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </>
        }
      />
    </ListItem>
  );
}
