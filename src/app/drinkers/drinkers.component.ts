import { Component, OnInit } from '@angular/core';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { MatDialog } from '../../../node_modules/@angular/material';
import { AuthService } from '../services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import { DeleteAccountDialogComponent } from '../delete-account-dialog/delete-account-dialog.component';

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

  constructor(public dialog: MatDialog, public auth:AuthService, public router: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 
  openDelete(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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

  // deleteUser() {
  //   this.auth.deleteUser(localStorage.id).subscribe(data => {
  //     this.users.push(data);
  //     localStorage.clear();
  //     this.router.navigate(['/login']);
  //   });
  //   console.log("deleteeeeee");
  // }

}
