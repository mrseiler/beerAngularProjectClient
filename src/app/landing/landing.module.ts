import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { LandingComponent } from './landing.component';
@NgModule({
  imports: 
  [
    CommonModule,
    MatButtonModule
  ],
  exports: 
  [
    MatButtonModule
  ],

  declarations:
  [
    LandingComponent
  ]
})
export class LandingModule { }
