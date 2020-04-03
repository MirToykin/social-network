import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import defaultUserPhoto from "../../assets/imgs/user.png";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  appBar: {
    height: theme.spacing(12)
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

export default function MenuAppBar({auth: {isFetching, isAuth, authUserProfile, login}, logOut, location: {pathname}}) {
  const classes = useStyles();
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const openMenu = Boolean(anchorElMenu);
  const openUser = Boolean(anchorElUser);

  const handleMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleLogOut = () => {
    setAnchorElUser(null);
    logOut();
  }

  const handleUser = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Container>
          <Toolbar>
            <IconButton edge="end"
                        className={classes.menuButton}
                        onClick={handleMenu}
            >
              <MenuIcon color='primary'/>
            </IconButton>
            <Menu
              anchorEl={anchorElMenu} // элемент рядом с которым будет отображено меню
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenu}
              onClose={handleCloseMenu}
            >
              {['Profile', 'Dialogs', 'News', 'Music', 'Settings', 'Users'].map(item => {
                return <MenuItem key={item} onClick={handleCloseMenu} component={NavLink}
                                 to={`/${item.toLowerCase()}`}>{item}</MenuItem>
              })}
            </Menu>
            <Typography color='primary' variant="h6" className={classes.title}>
              Samurai-Network
            </Typography>
            {isFetching ? <Preloader/> : isAuth ?
              <div>
                <IconButton
                  edge="end"
                  className={classes.menuButton}
                  onClick={handleUser}
                >
                  <Avatar alt={login}
                          src={authUserProfile.photos.small ? authUserProfile.photos.small : defaultUserPhoto}
                          className={classes.avatar}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorElUser} // элемент рядом с которым будет отображено меню
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openUser}
                  onClose={() => setAnchorElUser(null)}
                >
                  <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                  {pathname !== '/profile' && <MenuItem onClick={() => setAnchorElUser(null)}
                                                        component={NavLink}
                                                        to='/profile'
                  >My account</MenuItem>}
                </Menu>
              </div> :
              <div>
                <Link variant='subtitle1'
                      component={NavLink}
                      to='/login' color='inherit'
                      className={classes.link}
                >Log In</Link>
              </div>}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}