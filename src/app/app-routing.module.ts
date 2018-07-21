import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { BrewersComponent } from './auth/brewers/brewers.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [ 
  { path: 'auth', component: AuthComponent},
  {path: ''}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
