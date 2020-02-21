const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE'

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
    {id: 1, text: 'I am fine, what about you?'},
    {id: 1, text: 'Me too'},
    {id: 1, text: 'Good'},
    {id: 1, text: 'Of course'}
  ],
  addMessage: {
    btnText: 'Add Message'
  },
  messageValue: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messageValue = state.messageValue;
      return {
        ...state,
        messageValue: '',
        messages: [...state.messages, {id: 6, text: messageValue}]
      }
    case CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        messageValue: action.value
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const changeMessageValueActionCreator = (value) => {
  return {
    type: CHANGE_MESSAGE_VALUE,
    value: value
  }
}

export default dialogsReducer;
