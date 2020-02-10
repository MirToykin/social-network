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
    }
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

export  let addPost = (elem) => {
  let text = elem.current.value;
  state.profile.postsData.push({
    id: 5,
    text: text,
    likesCount: 0
  });
  state.profile.postValue = '';
  rerenderAll(state, addPost, handlePostValue);
}

export  let handlePostValue = (elem) => {
  state.profile.postValue = elem.current.value;
  rerenderAll(state, addPost, handlePostValue);
}

export  default state