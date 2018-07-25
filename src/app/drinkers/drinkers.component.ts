import { Component, OnInit } from '@angular/core';
import { AccountDialogComponent } from '../dialogs/account-dialog/account-dialog.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  username: string;

  constructor(public account: AccountDialogComponent, public auth: AuthService) { }

  ngOnInit() {
  }

  getUser() {
    this.auth.getOneUser();
  }

  update() {
    this.account.openDialog();
  }

}
