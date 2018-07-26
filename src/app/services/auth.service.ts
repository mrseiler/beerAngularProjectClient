import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(public http: HttpClient, public router: Router, private dataService: DataService) {}

  register(regUserData) {
    return this.http.post(`http://localhost:3000/api/user/createuser`, regUserData, {headers: this.setHeader()})
    
  }

  login(loginInfo) {
    return this.http.post(`http://localhost:3000/api/user/login`, loginInfo)
    .subscribe( (token) => {
      this.dataService.setUser(token)
      // console.log(token.);
      var data = Object.values(token);
      localStorage.setItem('token', data[2]);
      localStorage.setItem('id', data[0].id);
      console.log("localstorage: ", localStorage)
      this.isLoggedIn.next(true);
      this.router.navigate(['/mainnav/home']);
    },
    err => {
      console.log(err);
      alert("Invalid Username/Password combination");
    }
  )
  }
  updateUser(user) {
    return this.http.put(`http://localhost:3000/api/user/update/${localStorage.id}`, user)
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
  getUser(id) {
    return this.http.get(`http://localhost:3000/api/user/finduser/${id}`, id)
  }
  update(id ,userInfo) {
    return this.http.put(`http://localhost:3000/api/user/update/${id}`, userInfo)
  }
  deleteUser(id) {
    return this.http.delete(`http://localhost:3000/api/user/delete/${id}`)
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
