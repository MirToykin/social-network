const ADD_POST = 'ADD_POST';
const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';

let initialState = {
  postsData: [
    {id: 1, text: 'This is my first post!', likesCount: 14},
    {id: 2, text: 'Congratulations', likesCount: 10},
    {id: 3, text: 'Thanks', likesCount: 11},
  ],
  addPost: {
    btnText: 'Add Post'
  },
  postValue: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.postsData.push({
        id: 5,
        text: state.postValue,
        likesCount: 0
      });
      state.postValue = '';
      return state;
    case CHANGE_POST_VALUE:
      state.postValue = action.value;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const changePostValueActionCreator = (value) => {
  return {
    type: CHANGE_POST_VALUE,
    value: value
  }
}

export default profileReducer