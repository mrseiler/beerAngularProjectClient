import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthComponent } from './auth.component';
import { MatButtonModule } from '../../../node_modules/@angular/material/button';
import { RouterModule } from '../../../node_modules/@angular/router';
import { BrewersSignupComponent } from './brewers-signup/brewers-signup.component';
import { BrewersLoginComponent } from './brewers-login/brewers-login.component';
import { DrinkersSignupComponent } from './drinkers-signup/drinkers-signup.component';
import { DrinkersLoginComponent } from './drinkers-login/drinkers-login.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '../../../node_modules/@angular/material';

@NgModule({
  imports: 
  [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
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
  ]
})
export class AuthModule { }
