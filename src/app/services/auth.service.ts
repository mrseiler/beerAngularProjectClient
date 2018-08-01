import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DataService } from './data.service'
import { MatSnackBar } from '../../../node_modules/@angular/material';
import { FlashMessagesService } from '../../../node_modules/angular2-flash-messages';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(public http: HttpClient, public router: Router, private dataService: DataService, public snackBar: MatSnackBar, public flashMessage: FlashMessagesService) {}

  register(regUserData) {
    return this.http.post(`${APIURL}/api/user/createuser`, regUserData).subscribe((returnData) => {
      this.dataService.setUser(returnData);
      var data = Object.values(returnData);
      localStorage.setItem('token', data[2]);
      localStorage.setItem('id', data[0].id);
      this.isLoggedIn.next(true);
      this.router.navigate(['/mainnav/home']);
     
    })
    
  }

  login(loginInfo) {
    return this.http.post(`${APIURL}/api/user/login`, loginInfo)
    .subscribe( (token) => {
      this.dataService.setUser(token)
      var data = Object.values(token);
      localStorage.setItem('token', data[2]);
      localStorage.setItem('id', data[0].id);
      this.isLoggedIn.next(true);
      this.router.navigate(['/mainnav/home']);
      let snackBarRef = this.snackBar.open('You successfully created an account.',"Success!", {
        duration: 1000
      });
      
      snackBarRef.afterDismissed().subscribe(() => {
        console.log("success")
      });
    },
    err => {
      console.log(err);
      this.flashMessage.show(err.error.error, { 
        timeout: 2000
      });
    }
  )
  }
  updateUser(user) {
    return this.http.put(`${APIURL}/api/user/update/${localStorage.id}`, user)
  }
  
  currentUser(): Observable<Object> {
    if(!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false));}
    
    return this.http.get(`${APIURL}/api/user/myaccount`, { headers: this.setHeader() });
  }

  logout(): void{
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
    let snackBarRef = this.snackBar.open('You successfully logged out.',"Success!", {
      duration: 2000,
    });
    
    snackBarRef.afterDismissed().subscribe(() => {
      console.log("success");
    });
  }
  getUser(id) {
    return this.http.get(`${APIURL}/api/user/finduser/${id}`, id)
  }
  update(id ,userInfo) {
    return this.http.put(`${APIURL}/api/user/update/${id}`, userInfo)
  }
  deleteUser(id) {
    return this.http.delete(`${APIURL}/api/user/delete/${id}`)
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
