import profileReducer, {setUserProfile} from "./profile-reducer";

let state = {
  userProfile: null
}

it(`after setting of useProfile it shouldn't be null`, () => {
  // start test data
  let action = setUserProfile({id: 1});
  // action
  let newState = profileReducer(state, action);
  // expectation
  expect(newState.userProfile.id).toBe({id: 1});
});