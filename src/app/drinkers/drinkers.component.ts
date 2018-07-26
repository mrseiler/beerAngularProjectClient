import { Component, OnInit } from '@angular/core';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 
  ngOnInit() {
  }

}
