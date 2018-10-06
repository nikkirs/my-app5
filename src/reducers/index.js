import { combineReducers } from "redux";
import { Amigos } from "./amigos";
import { isLoggedIn } from "./isLoggedIn";
import Active from "./active_user";

const rootReducer = combineReducers({
  amigos: Amigos,
  isLoggedIn: isLoggedIn,
  activeuser: Active
});

export default rootReducer;
