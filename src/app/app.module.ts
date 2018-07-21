import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { DrinkersComponent } from './auth/drinkers/drinkers.component';
import { BrewersComponent } from './auth/brewers/brewers.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DrinkersComponent,
    BrewersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
