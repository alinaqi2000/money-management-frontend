import { User } from "../../models/user.model";
import {
  AuthActions,
  SET_ACCESS_TOKEN,
  SET_LOADING,
  SET_USER,
} from "./auth.action";

export interface AuthState {
  user: User | null;
  loading: boolean;
  accessToken: string;
}
const initialState: AuthState = {
  user: null,
  loading: false,
  accessToken: "",
};
const main = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
