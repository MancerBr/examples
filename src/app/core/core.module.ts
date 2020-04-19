import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {effects} from './store/effects';
import * as fromAuthReducer from './store/reducers/auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuthReducer.authFeatureKey, fromAuthReducer.reducer),
    EffectsModule.forFeature(effects),
  ],
})
export class CoreModule { }
