import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-drinkers-login',
  templateUrl: './drinkers-login.component.html',
  styleUrls: ['./drinkers-login.component.css']
})
export class DrinkersLoginComponent implements OnInit {

  username: string;
  password: string;

  users: Object[] = [];

  constructor(public auth: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
    var newUser = { user: {
      username: this.username,
      password: this.password
    }}
    this.auth.login(newUser);
  }

}
