import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    }
  }
});

/* HashRouter для gh-pages, основной BrowserRouter*/
ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App state={store.getState()}/>
    </ThemeProvider>
  </Provider>
</BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
