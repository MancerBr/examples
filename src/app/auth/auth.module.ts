import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [SignInComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class AuthModule { }
