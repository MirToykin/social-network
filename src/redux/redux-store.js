import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  navBar: navbarReducer,
  users: usersReducer,
  auth: authReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store