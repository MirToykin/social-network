import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import defaultUserPhoto from "../../assets/imgs/user.png";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://s2.logaster.com/static/v3/img/products/logo.png' alt='logo'/>
      {props.auth.isFetching ? <Preloader/> : props.auth.isAuth ?
        <div>
          {/*<NavLink onClick={() => props.setUserProfile(props.auth.authUserProfile)} to={'/profile'}>*/}
          <div>
            <img
              src={props.auth.authUserProfile.photos.small ? props.auth.authUserProfile.photos.small : defaultUserPhoto}
              alt={props.auth.login}/>
          </div>
          {/*</NavLink>*/}
          <p className={classes.login}>{props.auth.login}</p>
          <a href='#' onClick={props.logOut}>Log Out</a>
        </div> :
        <div>
          <NavLink to='/login'>Log In</NavLink>
        </div>}
    </header>
  )
}

export default Header