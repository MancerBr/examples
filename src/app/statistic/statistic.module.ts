import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {MatButtonModule} from '@angular/material/button';

import { StatisticComponent } from './statistic.component';
import {StatisticRoutingModule} from './statistic-routing.module';
import {SharedModule} from '../shared/shared.module';
import * as fromStatisticReducer from './store/reducers/statistic.reducer';
import {effects} from './store/effects';

@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    SharedModule,
    MatButtonModule,
    StoreModule.forFeature(fromStatisticReducer.statisticFeatureKey, fromStatisticReducer.reducer),
    EffectsModule.forFeature(effects),
  ]
})
export class StatisticModule { }
