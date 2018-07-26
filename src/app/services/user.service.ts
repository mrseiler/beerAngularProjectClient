import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }
  constructor(private http:HttpClient) { }

  getUser(){
  return this.http.get('http://localhost:3000/api/user/getuser', {headers:this.setHeader()}).pipe()
  }
}