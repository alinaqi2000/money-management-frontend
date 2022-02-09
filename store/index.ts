import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers, { MyAppState } from "./combineReducers";

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
