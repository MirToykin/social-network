import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(<HashRouter> // HashRouter для gh-pages, основной BrowserRouter
  <Provider store={store}>
    <App state={store.getState()}/>
  </Provider>
</HashRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
