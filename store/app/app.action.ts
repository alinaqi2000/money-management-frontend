export const SET_NAME = "[App] Set Name";

export class SetName {
  readonly type = SET_NAME;
  constructor(public payload: string) {}
}

export type AppActions = SetName;
