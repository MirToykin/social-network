import React, {useEffect} from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {getAuth} from "./redux/auth-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect} from "react-redux";

const App = (props) => {

  useEffect(() => {
    props.getAuth();
  }, [])
  debugger

  return (
    <div className='app-wrapper'>
      {props.isAuth ?
        <><HeaderContainer/>
          <NavBar state={props.state}/>
          <div className='app-wrapper-content'>
            <Route path='/' exact render={() => <Redirect to={'/profile'}/>}/>
            <Route path='/dialogs'
                   component={DialogsContainer}
            />
            <Route path='/profile/:userId?'
                   component={ProfileContainer}
            />
            <Route path='/users'
                   component={UsersContainer}
            />
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' component={LoginContainer}/>
          </div>
        </> : <Preloader dark={true}/>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAuth: () => dispatch(getAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
