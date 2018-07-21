import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: 
  [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports:
  [
    MatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class AuthModule { }
