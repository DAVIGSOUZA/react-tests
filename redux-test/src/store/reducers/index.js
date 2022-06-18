import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";

export const reducers = combineReducers({
  account: accountReducer
})
