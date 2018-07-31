import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { APIURL } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserbeerService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(`${APIURL}/api/userbeer/createuserbeer`, data, {headers:this.setHeader()}).pipe()
  }
  getOne(name){
    return this.http.get(`${APIURL}/api/userbeer/getbeer/${name}`, {headers:this.setHeader()}).pipe()
  }
  getAll(){
    return this.http.get(`${APIURL}/api/userbeer/getallbeers`, {headers:this.setHeader()}).pipe()
  }
  search(query){
    return this.http.get(`${APIURL}/api/userbeer/search/${query}`, {headers:this.setHeader()}).pipe()
  }
  edit(edit){
    return this.http.put(`${APIURL}/api/userbeer/search/${edit}`, {headers:this.setHeader()}).pipe()
  }
  delete(name){
    return this.http.delete(`${APIURL}/api/userbeer/delete/${name}`, {headers:this.setHeader()}).pipe()
  }
  


}
