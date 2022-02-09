import { combineReducers } from "redux";
import app, { AppState } from "./app/app.reducer";
import auth, { AuthState } from "./auth/auth.reducer";

export interface MyAppState {
  app: AppState;
  auth: AuthState;
}

const rootReducer = combineReducers({
  app: app,
  auth: auth,
});

export default rootReducer;
