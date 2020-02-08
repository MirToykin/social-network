import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

let dialogsData = [
  {id: 1, name: 'Miroslav'},
  {id: 2, name: 'Nastya'},
  {id: 3, name: 'Bogdan'},
  {id: 4, name: 'grendma Valya'},
  {id: 5, name: 'grendma Lena'}
  ];

let messegesData = [
  {id: 1, text: 'How are you?'},
  {id: 1, text: 'I am fine, what about you?'},
  {id: 1, text: 'Me too'},
  {id: 1, text: 'Good'},
  {id: 1, text: 'Ofcourse'},
]

let dialogsItems = dialogsData.map((item) => {
  return <DialogsItem name={item.name} id={item.id} key={item.id}/>
})

let messages = messegesData.map((item) => <Message text={item.text} key={item.id}/>)

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsItems}
      </div>
      <div className={classes.messages}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs