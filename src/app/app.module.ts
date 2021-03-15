import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
