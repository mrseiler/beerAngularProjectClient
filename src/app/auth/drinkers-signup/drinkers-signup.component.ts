import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drinkers-signup',
  templateUrl: './drinkers-signup.component.html',
  styleUrls: ['./drinkers-signup.component.css']
})
export class DrinkersSignupComponent implements OnInit {
 
  public registerForm: FormGroup;

  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  users: Object[] = [];

  constructor(public form: FormBuilder, public auth: AuthService) {
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
  }
}