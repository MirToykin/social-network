import dialogsReducer, {addMessageActionCreator} from "./dialogs-reducer";

let state = {
  messages: [
    {id: 1, text: 'How are you?'},
    {id: 2, text: 'I am fine, what about you?'},
    {id: 3, text: 'Me too'},
    {id: 4, text: 'Good'},
    {id: 5, text: 'Of course'}
  ],
  newMessageFormName: 'newMessageForm'
};

it(`after message adding length of array of messages increment`, () => {
  // start test data
  let action = addMessageActionCreator({messageText: 'test'});
  // action
  let newState = dialogsReducer(state, action);
  // expectation
  expect(newState.messages.length).toBe(6);
});