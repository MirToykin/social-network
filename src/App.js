import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <NavBar store={props.store}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}
        />
        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}
        />
        <Route path='/users'
               render={() => <UsersContainer/>}
        />
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/login' component={Login}/>
      </div>
    </div>
  )
}


export default App;
