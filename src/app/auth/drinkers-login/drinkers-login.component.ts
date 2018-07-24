import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drinkers-login',
  templateUrl: './drinkers-login.component.html',
  styleUrls: ['./drinkers-login.component.css']
})
export class DrinkersLoginComponent implements OnInit {

  username: string;
  password: string;

  users: Object[] = [];

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    var newUser = { user: {
      username: this.username,
      password: this.password
    }}
    console.log(newUser);
    this.auth.login(newUser);
    console.log(localStorage);
  }

}
