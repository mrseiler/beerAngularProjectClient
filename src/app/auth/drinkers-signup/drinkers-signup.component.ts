import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drinkers-signup',
  templateUrl: './drinkers-signup.component.html',
  styleUrls: ['./drinkers-signup.component.css']
})
export class DrinkersSignupComponent implements OnInit {
 

  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  users: Object[] = [];

  constructor(public auth: AuthService) {
   }

  ngOnInit() {
  }

  onSubmit() {
    var newUser = { user: {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password
    }}
    console.log(newUser);
    this.auth.register(newUser).subscribe(data => {
      this.users.push(data);
    });
    console.log(localStorage);
  }
}