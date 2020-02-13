const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_VALUE = 'CHANGE_MESSAGE_VALUE'

const dialogsReducer = (state, action) => {
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
