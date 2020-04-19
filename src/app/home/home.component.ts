import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {select, Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {selectHomeItems, selectHomeItemsError, selectIsLoadingHomeItems} from './store/selectors/home.selectors';
import {loadData} from './store/actions/home.actions';
import {IItemModel} from './store/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: IItemModel[] = [];
  error = '';
  displayedColumns: string[] = ['country', 'totalConfirmed', 'totalDeaths', 'totalRecovered'];
  dataSource = new MatTableDataSource<IItemModel>();
  isDataLoaded = true;

  private destroy$: Subject<any> = new Subject<any>();

  constructor(private store: Store<any>) {
    this.store.pipe(
      select(selectHomeItems),
      filter(data => !!data),
      takeUntil(this.destroy$),
    ).subscribe(data => {
      this.error = '';
      this.data = data;
      this. dataSource.data = this.data;
    });

    this.store.pipe(
      select(selectIsLoadingHomeItems),
      takeUntil(this.destroy$),
    ).subscribe(data => {
      this.isDataLoaded = data;
    });

    this.store.pipe(
      select(selectHomeItemsError),
      filter(data => !!data),
      takeUntil(this.destroy$),
    ).subscribe(data => {
      this.error = data.statusText;
      this.isDataLoaded = data;
    });
  }

  ngOnInit() {
    this.store.dispatch(loadData());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
