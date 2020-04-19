import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHome from '../reducers/home.reducer';

export const home = createFeatureSelector<fromHome.HomeState>(fromHome.homeFeatureKey);

export const selectHomeItems = createSelector(
  home,
  (state: fromHome.HomeState) => state.items,
);

export const selectHomeItemsError = createSelector(
  home,
  (state: fromHome.HomeState) => state.error,
);

export const selectIsLoadingHomeItems = createSelector(
  home,
  (state: fromHome.HomeState) => state.isLoading,
);
