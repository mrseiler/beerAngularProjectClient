import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserbeerService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post('http://localhost:3000/api/userbeer/createuserbeer', data, {headers:this.setHeader()}).pipe()
  }
  getOne(name){
    return this.http.get(`http://localhost:3000/api/userbeer/getbeer/${name}`, {headers:this.setHeader()}).pipe()
  }
  getAll(){
    return this.http.get('http://localhost:3000/api/userbeer/getallbeers', {headers:this.setHeader()}).pipe()
  }
  search(query){
    return this.http.get(`http://localhost:3000/api/userbeer/search/${query}`, {headers:this.setHeader()}).pipe()
  }
  edit(edit){
    return this.http.put(`http://localhost:3000/api/userbeer/search/${edit}`, {headers:this.setHeader()}).pipe()
  }
  delete(name){
    return this.http.delete(`http://localhost:3000/api/userbeer/delete/${name}`, {headers:this.setHeader()}).pipe()
  }
  


}
