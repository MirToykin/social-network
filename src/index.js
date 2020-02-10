
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import  {addPost as addPost} from "./redux/state";
import  {handlePostValue as handlePostValue} from "./redux/state";
import rerenderAll from "./render";

rerenderAll(state, addPost, handlePostValue)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
