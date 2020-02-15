import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _subscriber()  {
    console.log('no subscribers (observers)')
  },
  _state: {
    dialogs: {
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
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer
  },
  dispatch(action) {
    this._state.dialogs = dialogsReducer(this._state.dialogs, action)
    this._state.profile = profileReducer(this._state.profile, action)
    this._state.navBar = navbarReducer(this._state.navBar, action)

    this._subscriber();
  }
}

export default store