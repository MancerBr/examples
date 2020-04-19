import { Action, createReducer, on } from '@ngrx/store';
import * as fromAuth from '../actions/auth.actions';

export const authFeatureKey = 'Auth';

export interface AuthState {
  email: string;
  token: string;
  error: any;
  isLoading: boolean;
}

export const initialState: AuthState = {
  email: null,
  token: null,
  error: null,
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    fromAuth.login,
    (state: AuthState, { email }) => ({
      ...state,
      email,
      isLoading: true,
    })),
  on(
    fromAuth.loginSuccess,
    (state: AuthState, { token }) => ({
      ...state,
      token,
      isLoading: false,
    })),
  on(
    fromAuth.requestFail,
    (state: AuthState, { error }) => ({
      ...state,
      error,
      isLoading: false,
    })),
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
