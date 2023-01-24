import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
    // Add reducers here
    loginState: loginReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;