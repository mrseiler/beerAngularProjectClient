import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-update-user-snackbar',
  templateUrl: './update-user-snackbar.component.html',
  styleUrls: ['./update-user-snackbar.component.css']
})
export class UpdateUserSnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

}
