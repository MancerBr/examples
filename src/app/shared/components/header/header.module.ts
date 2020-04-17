import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MenuComponent } from './shared/components/menu/menu.component';

const COMPONENTS = [
  HeaderComponent,
  MenuComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
  ],
  exports: [ ...COMPONENTS ],
})
export class HeaderModule { }
