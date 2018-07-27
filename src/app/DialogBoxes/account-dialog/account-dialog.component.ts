import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef, MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  users: Object[] = [];

  constructor(public auth: AuthService, public dialogRef: MatDialogRef<AccountDialogComponent>, public snackBar: MatSnackBar) { }
  

  ngOnInit() {
    this.getUserInfo();
  }
  onSubmit() {
    var editUser = { user: {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password
    }}
    this.auth.update(localStorage.id, editUser).subscribe(data => {
      this.users.push(data);
      let snackBarRef = this.snackBar.open('Your account was successfully updated.',"Success!", {
        duration: 2000
      });
      
      snackBarRef.afterDismissed().subscribe(() => {
        console.log('The snack-bar was dismissed');
        location.reload();
      });
            

    });
  }
  
  close(): void{
    this.dialogRef.close();
  }
  getUserInfo() {
    this.auth.getUser(localStorage.id).subscribe(data => {
      var userInfo = Object.values(data);
      this.firstname = userInfo[4];
      this.lastname = userInfo[5];
      this.username = userInfo[3];
      this.email = userInfo[1];
    })
  } 
  

}
