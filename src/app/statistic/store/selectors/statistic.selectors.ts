import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStatistic from '../reducers/statistic.reducer';

export const statistic = createFeatureSelector<fromStatistic.StatisticState>(fromStatistic.statisticFeatureKey);

export const selectStatisticItems = createSelector(
  statistic,
  (state: fromStatistic.StatisticState) => state.items,
);

export const selectStatisticData = createSelector(
  statistic,
  (state: fromStatistic.StatisticState) => state.data,
);

export const selectStatisticError = createSelector(
  statistic,
  (state: fromStatistic.StatisticState) => state.error,
);

export const selectStatisticIsLoading = createSelector(
  statistic,
  (state: fromStatistic.StatisticState) => state.isLoading,
);
