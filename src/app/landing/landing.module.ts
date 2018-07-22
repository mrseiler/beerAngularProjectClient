import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MatToolbarModule } from '../../../node_modules/@angular/material';
import { MatButtonModule } from '../../../node_modules/@angular/material';
@NgModule({
  imports: 
  [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: 
  [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  ],

  declarations:
  [
    LandingComponent,
  ]
})
export class LandingModule { }
