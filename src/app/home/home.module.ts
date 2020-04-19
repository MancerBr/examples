import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import * as fromHomeReducer from './store/reducers/home.reducer';
import {effects} from './store/effects';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(fromHomeReducer.homeFeatureKey, fromHomeReducer.reducer),
    EffectsModule.forFeature(effects),
  ]
})
export class HomeModule { }
