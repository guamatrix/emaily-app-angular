import { Action } from '@ngrx/store';
import { User } from './ui.reducers';

export const SET_LOADER = '[UI] set loader';
export const LOGIN = '[UI] Login';
export const LOGOUT = '[UI] Logout';
export const SET_USER = '[UI] get user';

export class SetLoader implements Action {
  readonly type = SET_LOADER;
  constructor(public payload: boolean) {}
}

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User) {}
}

export type  UIActions = SetLoader | Login | Logout | SetUser;
