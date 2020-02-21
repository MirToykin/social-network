import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  navBar: navbarReducer,
  users: usersReducer
})

let store = createStore(reducers);

export default store