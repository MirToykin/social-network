import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  {id: 1, name: 'Miroslav'},
  {id: 2, name: 'Nastya'},
  {id: 3, name: 'Bogdan'},
  {id: 4, name: 'grendma Valya'},
  {id: 5, name: 'grendma Lena'}
];

let messagesData = [
  {id: 1, text: 'How are you?'},
  {id: 1, text: 'I am fine, what about you?'},
  {id: 1, text: 'Me too'},
  {id: 1, text: 'Good'},
  {id: 1, text: 'Ofcourse'}
];

let postsData = [
  {id: 1, text: 'This is my first post!', likesCount: 14},
  {id: 2, text: 'Congratulations', likesCount: 10},
  {id: 3, text: 'Thanks', likesCount: 11},
];

let data = {
  dialogsData: dialogsData,
  messagesData: messagesData,
  postsData: postsData
}

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
