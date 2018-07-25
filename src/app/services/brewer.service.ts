import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrewerService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }

  constructor(private http:HttpClient) { }
  createBrewer(data){
    return this.http.post('http://localhost:3000/api/brewer/', {headers:this.setHeader()}).pipe()
  }
  findBrewer(data){
    return this.http.get(`http://localhost:3000/api/brewer/${data.id}`, {headers:this.setHeader()}).pipe()
  }
  editBrewer(data){
    return this.http.put(`http://localhost:3000/api/brewer/update/${data.id}`, data, {headers:this.setHeader()}).pipe()
  }

}
