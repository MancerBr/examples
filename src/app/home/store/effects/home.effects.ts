import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import * as fromHome from '../actions/home.actions';
import {HomeService} from '../../services/home.service';


@Injectable()
export class HomeEffects {

  constructor(
    private actions$: Actions,
    private homeService: HomeService,
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromHome.loadData),
      mergeMap(() =>
        this.homeService.getSummary().pipe(
          map((items: any[]) => fromHome.loadSuccess({ items })),
          catchError((error: any) => of(fromHome.requestFail({ error }))),
        ),
      ),
    ),
  );
}
