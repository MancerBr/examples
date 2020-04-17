import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticComponent } from './statistic.component';
import {StatisticRoutingModule} from './statistic-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    SharedModule,
  ]
})
export class StatisticModule { }
