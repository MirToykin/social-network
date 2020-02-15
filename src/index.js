import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'

function rerenderAll() {
  ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)}
  />, document.getElementById('root'));
}

rerenderAll()
store.subscribe(() => {
  rerenderAll(store.getState())
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
