import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrewersComponent } from './brewers/brewers.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatCheckboxModule, MatTableModule, MatSidenavModule } from '../../node_modules/@angular/material';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { DrinkersSignupComponent } from './auth/drinkers-signup/drinkers-signup.component';
import { DrinkersLoginComponent } from './auth/drinkers-login/drinkers-login.component';
import { UIComponent } from './ui/ui.component';
import { NavComponent } from './ui/nav/nav.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BrewersComponent,
    DrinkersComponent,
    AuthComponent,
    DrinkersSignupComponent, 
    DrinkersLoginComponent,
    UIComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    HttpClientModule,
    MatSidenavModule
    
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
