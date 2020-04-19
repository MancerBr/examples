import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

import * as fromStatistic from '../actions/statistic.actions';
import {StatisticService} from '../../services/statistic.service';


@Injectable()
export class StatisticEffects {

  constructor(
    private actions$: Actions,
    private statisticService: StatisticService,
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStatistic.loadData),
      mergeMap(() =>
        this.statisticService.loadStatistic().pipe(
          mergeMap(({ data }) => of(
            fromStatistic.loadSuccess({ data }),
            fromStatistic.setDataForExample({ items: data }),
            ),
          ),
          catchError((error: any) => of(fromStatistic.requestFail({ error }))),
        ),
      ),
    ),
  );
}
