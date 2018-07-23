import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';

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
    FormsModule,
    HttpModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
