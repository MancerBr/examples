import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import {AuthService} from '../../services/auth.service';
import * as fromAuth from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuth.login),
      mergeMap(({ email }) =>
        this.authService.login(email).pipe(
          map(({ access_token }) => fromAuth.loginSuccess({ token: access_token })),
          catchError((error: any) => of(fromAuth.requestFail({ error }))),
        ),
      ),
    ),
  );
}
