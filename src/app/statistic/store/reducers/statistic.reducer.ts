import { Action, createReducer, on } from '@ngrx/store';

import * as fromHome from '../actions/statistic.actions';

export const statisticFeatureKey = 'Statistic';

export interface StatisticState {
  data: number[];
  items: number[];
  error: any;
  isLoading: boolean;
}

export const initialState: StatisticState = {
  data: null,
  items: null,
  error: null,
  isLoading: false,
};

export const statisticReducer = createReducer(
  initialState,
  on(
    fromHome.loadData,
    (state: StatisticState) => ({
      ...state,
      isLoading: true,
    })),
  on(
    fromHome.loadSuccess,
    (state: StatisticState, { data }) => ({
      ...state,
      data,
      isLoading: false,
    })),
  on(
    fromHome.setDataForExample,
    (state: StatisticState, { items }) => ({
      ...state,
      items,
      isLoading: false,
    })),
  on(
    fromHome.requestFail,
    (state: StatisticState, { error }) => ({
      ...state,
      error,
      isLoading: false,
    })),
);

export function reducer(state: StatisticState | undefined, action: Action) {
  return statisticReducer(state, action);
}
