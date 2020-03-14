import appReducer, {setInitializedSuccess} from "./app-reducer";

let state = {
  isInitialized: false
}

it('after setting of initialize success isInitialized gets true', () => {
  // start test data
  let action = setInitializedSuccess();
  // action
  let newState = appReducer(state, action);
  // expectation
  expect(newState.isInitialized).toBe(true);
});