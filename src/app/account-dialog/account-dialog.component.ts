import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialogRef } from '../../../node_modules/@angular/material';

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

  constructor(public auth: AuthService, public dialogRef: MatDialogRef<AccountDialogComponent>) { }

  ngOnInit() {
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
      location.reload();
    });
  }
  close(): void{
    this.dialogRef.close();
  }

}
