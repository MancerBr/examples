import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] login',
  props<{ email: string }>(),
);

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ token: string }>(),
);

export const requestFail = createAction(
  '[Auth] request fail',
  props<{ error: any }>(),
);
