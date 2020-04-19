import { createAction, props } from '@ngrx/store';

export const loadData = createAction(
  '[Statistic] load data',
);

export const loadSuccess = createAction(
  '[Statistic] load success',
  props<{ data: number[] }>(),
);

export const setDataForExample = createAction(
  '[Statistic] set data for example',
  props<{ items: number[] }>(),
);

export const requestFail = createAction(
  '[Statistic] request fail',
  props<{ error: any }>(),
);
