import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [SignInComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
