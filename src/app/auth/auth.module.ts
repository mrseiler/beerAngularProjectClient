import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthComponent } from './auth.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { BrewersSignupComponent } from './brewers-signup/brewers-signup.component';
import { BrewersLoginComponent } from './brewers-login/brewers-login.component';
import { DrinkersSignupComponent } from './drinkers-signup/drinkers-signup.component';
import { DrinkersLoginComponent } from './drinkers-login/drinkers-login.component';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTableModule, MatCardTitle, MatCardModule } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: 
  [
    CommonModule,
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
    HttpClientModule
  ],
  exports:
  [
    BrowserAnimationsModule,
  ],
  declarations: [
    AuthComponent,
     BrewersSignupComponent, 
     BrewersLoginComponent,
    DrinkersSignupComponent, 
    DrinkersLoginComponent,
  ],
  providers: [AuthService]
})
export class AuthModule { }
