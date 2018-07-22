import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthComponent } from './auth.component';
import { MatButtonModule } from '../../../node_modules/@angular/material/button';

@NgModule({
  imports: 
  [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports:
  [
    BrowserAnimationsModule,
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
