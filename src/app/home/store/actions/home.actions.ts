import { createAction, props } from '@ngrx/store';

export const loadData = createAction(
  '[Home] load data',
);

export const loadSuccess = createAction(
  '[Home] load success',
  props<{ items: any }>(),
);

export const requestFail = createAction(
  '[Home] request fail',
  props<{ error: any }>(),
);
