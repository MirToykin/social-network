import rerenderAll from "../render";

let state = {
  dialogs: {
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
  },
  profile: {
    postsData: [
      {id: 1, text: 'This is my first post!', likesCount: 14},
      {id: 2, text: 'Congratulations', likesCount: 10},
      {id: 3, text: 'Thanks', likesCount: 11},
    ],
    addPost: {
      btnText: 'Add Post'
    },
    postValue: ''
  },
  navBar: {
    friendsData: [
      {
        id: 1,
        name: 'Bogdan',
        avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg'
      },
      {
        id: 2,
        name: 'Nastya',
        avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg'
      },
      {
        id: 3,
        name: 'Miroslav',
        avaUrl: 'https://st4.depositphotos.com/27867620/30471/v/450/depositphotos_304718678-stock-illustration-joker-web-icon-simple-illustration.jpg'
      }
    ]
  }
}

let addPost = () => {
  state.profile.postsData.push({
    id: 5,
    text: state.profile.postValue,
    likesCount: 0
  });
  state.profile.postValue = '';
  rerenderAll(state, methods);
}

let changePostValue = (elem) => {
  state.profile.postValue = elem.current.value;
  rerenderAll(state, methods);
}

let addMessage = () => {
  state.dialogs.messagesData.push({
    id: 6,
    text: state.dialogs.messageValue,
  });
  state.dialogs.messageValue = '';
  rerenderAll(state, methods);
}

let changeMessageValue = (elem) => {
  state.dialogs.messageValue = elem.current.value;
  rerenderAll(state, methods);
}

export let methods = {
  addPost: addPost,
  changePostValue: changePostValue,
  addMessage: addMessage,
  changeMessageValue: changeMessageValue
}

export  default state