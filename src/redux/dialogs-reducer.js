const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE'

let initialState = {
  dialogsData: [
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
  messagesData: [
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messagesData.push({
        id: 6,
        text: state.messageValue,
      });
      state.messageValue = '';
      return state;
    case CHANGE_MESSAGE_VALUE:
      state.messageValue = action.value;
      return state;
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
