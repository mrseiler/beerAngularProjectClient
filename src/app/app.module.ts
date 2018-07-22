import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingModule } from './landing/landing.module';
import { AuthModule } from './auth/auth.module';
import { BrewersComponent } from './brewers/brewers.component';
import { DrinkersComponent } from './drinkers/drinkers.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BrewersComponent,
    DrinkersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
