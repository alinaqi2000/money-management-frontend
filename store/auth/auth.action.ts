import { User } from "../../models/user.model";

export const SET_LOADING = "[Auth] Set Loading";
export const SET_USER = "[Auth] Set User";
export const SET_ACCESS_TOKEN = "[Auth] Set Access Token";

export class SetLoading {
  readonly type = SET_LOADING;
  constructor(public payload: boolean) {}
}
export class SetUser {
  readonly type = SET_USER;
  constructor(public payload: User | null) {}
}

export class SetAccessToken {
  readonly type = SET_ACCESS_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions = SetLoading | SetUser | SetAccessToken;
