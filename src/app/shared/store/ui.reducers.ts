import * as Actions from './ui.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false
};

export function uiReducer(state = initialState, action: Actions.UIActions) {
  switch (action.type) {
    case Actions.SET_LOADER:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}

export const isLoading = (state: State) => state.loading;
