import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import {SharedModule} from '../../shared/shared.module';

const COMPONENTS = [
  MainLayoutComponent,
  AuthLayoutComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ ...COMPONENTS ],
})
export class LayoutModule { }
