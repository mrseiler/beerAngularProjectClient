import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(public http: HttpClient, public router: Router) { }

  register(regUserData: RegisterUser) {
    return this.http.post(`http://localhost:3000/api/user/createuser`, regUserData);
  }
  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`http://localhost:3000/Token`, str).subscribe( (token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.router.navigate(['/']);
    });
  }

  currentUser(): Observable<Object> {
    if(!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false));}
    
    return this.http.get(`http://localhost:3000/api/Account/UserInfo`, { headers: this.setHeader() });
  }

  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this.http.post(`http://localhost:3000/api/Account/Logout`, { headers: this.setHeader() });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
