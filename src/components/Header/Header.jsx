import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/imgs/user.png";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://s2.logaster.com/static/v3/img/products/logo.png' alt='logo'/>
      {props.auth.isFetching ? <Preloader/> : props.auth.isAuth ?
        <div>
          <NavLink onClick={() => props.setUserProfile(props.auth.authUserProfile)} to={'/profile/' + props.auth.id}>
            <img src={props.auth.avaUrl ? props.auth.avaUrl : userPhoto} alt={props.auth.login}/>
          </NavLink>
          <p className={classes.login}>{props.auth.login}</p>
        </div> :
        <div>
          <NavLink to='/login'>Login</NavLink>
        </div>}
    </header>
  )
}

export default Header