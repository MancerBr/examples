import { Action, createReducer, on } from '@ngrx/store';

import * as fromHome from '../actions/home.actions';
import {IItemModel} from '../models/item.model';

export const homeFeatureKey = 'Home';

export interface HomeState {
  items: IItemModel[];
  error: any;
  isLoading: boolean;
}

export const initialState: HomeState = {
  items: null,
  error: null,
  isLoading: false,
};

export const homeReducer = createReducer(
  initialState,
  on(
    fromHome.loadData,
    (state: HomeState) => ({
      ...state,
      isLoading: true,
    })),
  on(
    fromHome.loadSuccess,
    (state: HomeState, { items }) => {
      const itemsWithConvertType = items.Countries ? items.Countries.map(item => ({
        country: item.Country,
        date: item.Date.toLocaleString(),
        totalConfirmed: item.TotalConfirmed,
        totalDeaths: item.TotalDeaths,
        totalRecovered: item.TotalRecovered,
      })) : [];
      return {
        ...state,
        items: itemsWithConvertType,
        isLoading: false,
      };
    }),
  on(
    fromHome.requestFail,
    (state: HomeState, { error }) => ({
      ...state,
      error,
      isLoading: false,
    })),
);

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
