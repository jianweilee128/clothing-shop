import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({
  user: userReducer,
  directory: directoryReducer,
});
