import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  navBar: navbarReducer,
  users: usersReducer,
  auth: authReducer
})

let store = createStore(reducers);
window.store = store;

export default store