import { Action } from '@ngrx/store';
export const SET_LOADER = '[UI] set loader';

export class SetLoader implements Action {
  readonly type = SET_LOADER;
}
