import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderModule} from './components/header/header.module';

const MODULES = [
  HeaderModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [ ...MODULES ],
})
export class SharedModule { }
