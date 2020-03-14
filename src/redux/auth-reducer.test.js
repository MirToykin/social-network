import authReducer, {setAuthData} from "./auth-reducer";

let state = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  authUserProfile: null
}

it(`after setting of auth data id shouldn't be null`, () => {
  // start test data
  let action = setAuthData(1);
  // action
  let newState = authReducer(state, action);
  // expectation
  expect(newState.id).toBe(1);
});