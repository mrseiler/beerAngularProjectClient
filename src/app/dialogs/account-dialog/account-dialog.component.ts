import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
}
@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent{

  firstname: string = localStorage.firstname;
  lastname: string = localStorage.lastname;
  email: string = localStorage.email;
  username: string = localStorage.username;
  userInfo: DialogData;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {firstname: this.firstname, lastname: this.lastname, email: this.email, username: this.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userInfo = result;
      console.log(this.userInfo);
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'account-dialog-overview.html',
})
export class DialogOverviewExampleDialog {

  firstname: string;

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    var updateUser = { user: {
      firstname: this.firstname
    }}
    localStorage.firstname = this.firstname;
    console.log(this.data.firstname);
    console.log(updateUser);
    this.dialogRef.close();
  }

}
