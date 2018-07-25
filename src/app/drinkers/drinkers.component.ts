import { Component, OnInit } from '@angular/core';
import { AccountDialogComponent } from '../dialogs/account-dialog/account-dialog.component';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  firstname: string = localStorage.firstname;
  lastname: string = localStorage.lastname;
  email: string = localStorage.email;
  username: string = localStorage.username;

  constructor(public account: AccountDialogComponent) { }

  ngOnInit() {
  }

  update() {
    this.account.openDialog();
  }

}
