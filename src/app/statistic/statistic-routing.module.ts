import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StatisticComponent} from './statistic.component';



const authRoutes: Routes = [
  {
    path: '',
    component: StatisticComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class StatisticRoutingModule {
}
