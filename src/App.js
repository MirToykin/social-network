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
import Preloader from "./components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";

const App = (props) => {

  useEffect(() => {
    props.initializeApp();
  }, [])

  return (
    <div className='app-wrapper'>
      {props.isInitialized ?
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
    isInitialized: state.app.isInitialized
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initializeApp: () => dispatch(initializeApp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
