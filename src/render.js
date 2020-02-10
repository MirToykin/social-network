import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function rerenderAll(state, addPost, handlePostValue) {
  ReactDOM.render(<App state={state}
                       addPost={addPost}
                       handlePostValue={handlePostValue}
  />, document.getElementById('root'));
}

export default  rerenderAll;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
