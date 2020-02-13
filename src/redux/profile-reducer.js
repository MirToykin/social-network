const ADD_POST = 'ADD_POST';
const CHANGE_POST_VALUE = 'CHANGE_POST_VALUE';

const profileReducer = (state, action) => {
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