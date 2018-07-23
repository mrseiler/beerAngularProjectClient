import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drinkers-signup',
  templateUrl: './drinkers-signup.component.html',
  styleUrls: ['./drinkers-signup.component.css']
})
export class DrinkersSignupComponent implements OnInit {
 
  private registerForm: FormGroup;

  constructor(private form: FormBuilder, public auth: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() { 
    this.registerForm = this.form.group({
      first_name: new FormControl,
      last_name: new FormControl,
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      passwordConfirm: new FormControl
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
    //this.auth.register(this.registerForm.value).subscribe( () => this.auth.login(this.registerForm.value));
  }
}