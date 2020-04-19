import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {loadData} from './store/actions/statistic.actions';
import {selectStatisticData, selectStatisticItems} from './store/selectors/statistic.selectors';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnDestroy {

  firstData: any;
  secondData: any;

  private destroy$: Subject<any> = new Subject<any>();

  constructor(private store: Store<any>) {
    this.store.pipe(
      select(selectStatisticItems),
      takeUntil(this.destroy$),
    ).subscribe(data => {
      this.firstData = data;
    });

    this.store.pipe(
      select(selectStatisticData),
      takeUntil(this.destroy$),
    ).subscribe(data => {
      this.secondData = data;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData() {
    this.store.dispatch(loadData());
  }

}
