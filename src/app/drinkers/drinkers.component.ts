import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '../../../node_modules/@angular/material';
import { AuthService } from '../services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import { DeleteAccountDialogComponent } from '../DialogBoxes/delete-account-dialog/delete-account-dialog.component';
import { AccountDialogComponent } from '../DialogBoxes/account-dialog/account-dialog.component';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  email: string;
  users: Object[] = [];


  constructor(public dialog: MatDialog, public auth:AuthService, public router: Router, public snackBar: MatSnackBar) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  } 
  openDelete(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  } 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  ngOnInit() {
    this.fillData();
  }

  fillData() {
    this.auth.getUser(localStorage.id).subscribe(data => {
      var userInfo = Object.values(data);
      this.firstname = userInfo[4];
      this.lastname = userInfo[5];
      this.username = userInfo[3];
      this.email = userInfo[1];
    })
  }
}
