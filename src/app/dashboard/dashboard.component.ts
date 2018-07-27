import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  firstname: string;

  constructor(public auth: AuthService) { }

  getUserInfo() {
    this.auth.getUser(localStorage.id).subscribe(data => {
      var userInfo = Object.values(data);
      this.firstname = userInfo[4]
    })
  }
  ngOnInit() {
    this.getUserInfo();
  }

}
