import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }
  constructor(private http:HttpClient) { }

  getUser(){
  return this.http.get(`${APIURL}//api/user/getuser`, {headers:this.setHeader()}).pipe()
  }
}