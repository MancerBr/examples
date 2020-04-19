import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './core/layout/layout.module';
import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot([], {}),
    EffectsModule.forRoot([]),
    !environment.production
      ? StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
      : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
