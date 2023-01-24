import { ActionType } from "../action-types";
const initialState = {
  isSigninInProgress: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_START:
      return { ...state, isSigninInProgress: true };
    case ActionType.LOGIN_SUCCESS:
      return { ...state, isSigninInProgress: false, user: action.payload };
    case ActionType.LOGIN_ERROR:
      return { ...state, isSigninInProgress: false };
    default:
      return state;
  }
}
export default reducer;