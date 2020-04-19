import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from '../reducers/auth.reducer';

export const auth = createFeatureSelector<fromAuth.AuthState>(fromAuth.authFeatureKey);

export const selectEmail = createSelector(
  auth,
  (state: fromAuth.AuthState) => state.email,
);

export const selectIsLoadingAuth = createSelector(
  auth,
  (state: fromAuth.AuthState) => state.isLoading,
);

export const selectAuthToken = createSelector(
  auth,
  (state: fromAuth.AuthState) => state.token,
);
