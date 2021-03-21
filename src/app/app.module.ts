import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { StoreModule } from '@ngrx/store';

import { PrincipalModule } from './components/principal/principal.module';
// Components
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// environment
import { environment } from 'src/environments/environment';
import { appReducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { effectsArray } from './store/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArray),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
