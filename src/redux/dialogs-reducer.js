const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
  dialogsItems: [
    {
      id: 1,
      avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg',
      name: 'Miroslav'
    },
    {
      id: 2,
      avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg',
      name: 'Nastya'
    },
    {
      id: 3,
      avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg',
      name: 'Bogdan'
    },
    {
      id: 4,
      avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg',
      name: 'grendma Valya'
    },
    {
      id: 5,
      avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg',
      name: 'grendma Lena'
    }
  ],
  messages: [
    {id: 1, text: 'How are you?'},
    {id: 2, text: 'I am fine, what about you?'},
    {id: 3, text: 'Me too'},
    {id: 4, text: 'Good'},
    {id: 5, text: 'Of course'}
  ],
  newMessageFormName: 'newMessageForm'
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 6, text: action.message.messageText}]
      }
    default:
      return state;
  }
}

export const addMessageActionCreator = message => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export default dialogsReducer;
