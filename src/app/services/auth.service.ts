import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(public http: HttpClient, public router: Router) {}//, public jwtHelper: JwtHelperService) { }

  register(regUserData) {
    return this.http.post(`http://localhost:3000/api/user/createuser`, regUserData, {headers: this.setHeader()});
  }

  login(loginInfo) {
    return this.http.post(`http://localhost:3000/api/user/login`, loginInfo).subscribe( (token) => {
      console.log(token);
      var data = token;
      localStorage.setItem('token', data[1]);
      console.log(localStorage)
      localStorage.clear();
      this.isLoggedIn.next(true);
      this.router.navigate(['/home']);
    });
  }

  currentUser(): Observable<Object> {
    if(!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false));}
    
    return this.http.get(`http://localhost:3000/api/user/myaccount`, { headers: this.setHeader() });
  }

  logout(): void{
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  /*public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }*/
}
