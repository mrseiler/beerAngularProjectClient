import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialogRef } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.css']
})
export class DeleteAccountDialogComponent implements OnInit {

  users: Object[] = [];

  constructor(public auth: AuthService, public dialogRef: MatDialogRef<DeleteAccountDialogComponent>,
  public router: Router) { }

  ngOnInit() {
  }

  deleteUser() {
    this.auth.deleteUser(localStorage.id).subscribe(data => {
      this.users.push(data);
      localStorage.clear();
      this.dialogRef.close();
      this.router.navigate(['/login']);
    });
    console.log("deleteeeeee");
  }
  close(): void{
    this.dialogRef.close();
  }

}
