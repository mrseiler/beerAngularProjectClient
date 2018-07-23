import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingModule } from './landing/landing.module';
import { AuthModule } from './auth/auth.module';
import { BrewersComponent } from './brewers/brewers.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { UIComponent } from './ui/ui.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavComponent } from './ui/nav/nav.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BrewersComponent,
    DrinkersComponent,
    FooterComponent,
    NavComponent,
    UIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    AuthModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
