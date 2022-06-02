import { combineReducers } from "redux";

import contactReducer from "./contacts.slice";
import genericReducer from "./generics.slice";

export default combineReducers({
  contactReducer,
  genericReducer,
});
