import * as Actions from './ui.actions';

export interface User {
  googleID: String;
  credits: Number;
  email: String;
}

export interface State {
  loading: boolean;
  auth: User;
}

const initialState: State = {
  loading: false,
  auth: null
};

export function uiReducer(state = initialState, action: Actions.UIActions) {
  switch (action.type) {
    case Actions.SET_LOADER:
      return { ...state, loading: action.payload };

    case Actions.LOGIN:
      return { ...state, auth: action.payload };

    case Actions.LOGOUT:
      return { ...state, auth: null };

    case Actions.SET_USER:
      return { ...state, auth: action.payload ? action.payload : null };

    default:
      return state;
  }
}

export const isLoading = (state: State) => state.loading;
export const isAuth = (state: State) => state.auth != null;
export const getUser = (state: State) => state.auth;
