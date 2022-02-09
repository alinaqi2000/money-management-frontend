import { AppActions, SET_NAME } from "./app.action";

export interface AppState {
  name: string;
}
const initialState: AppState = {
  name: "Money Management",
};
const main = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
