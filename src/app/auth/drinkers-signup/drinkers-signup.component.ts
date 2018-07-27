import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

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

  constructor(public auth: AuthService, public snackBar: MatSnackBar) {
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
    this.auth.register(newUser);

    let snackBarRef = this.snackBar.open('You successfully created an account.',"Success!", {
      duration: 1000
    });
    
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
      location.reload();
    });
  }
}