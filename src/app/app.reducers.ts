import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUI from './shared/store/ui.reducers';

export interface State {
  ui: fromUI.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUI.uiReducer
};

export const getUIState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getUIState, fromUI.isLoading);
export const getIsAuth = createSelector(getUIState, fromUI.isAuth);
export const getUser = createSelector(getUIState, fromUI.getUser);
