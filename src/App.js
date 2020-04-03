import React, {Suspense, useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
    padding: theme.spacing(3)
  }
}));

const App = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.initializeApp();
  }, [])

  return (
    <div style={{backgroundColor: '#212121'}} className='app-wrapper'>
      {props.isInitialized ?
        <>
          <HeaderContainer/>
          <Container className={classes.container}>
            <div className='app-wrapper-content'>
              <Suspense fallback={<Preloader/>}>
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
              </Suspense>
            </div>
          </Container>
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
