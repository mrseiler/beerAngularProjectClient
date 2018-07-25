import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }

  constructor(private http: HttpClient, private auth:AuthService) { }

  getBeers(){
    return this.http.get('http://localhost:3000/api/beer/getallbeers', {headers:this.setHeader()})
    .pipe()
  }

  addBeer(beer){
    return this.http.post('http://localhost:3000/api/beer/createbeer', beer, {headers:this.setHeader()})
    .pipe()
  }

  getOneBeer(id){
    return this.http.get(`http://localhost:3000/api/beer/getonebeer/${id}`, {headers:this.setHeader()})
    .pipe()
  }

  editBeer(beer, id){
    return this.http.put(`http://localhost:3000/api/beer/editbeer/${id}`, beer, {headers:this.setHeader()})
  }

  searchBeer(query){
    return this.http.get(`http://localhost:3000/api/beer/searchbeer/${query}`, {headers:this.setHeader()})
    .pipe()
  }

  deleteBeer(id){
    return this.http.delete(`http://localhost:3000/api/beer/deletebeer/${id}`, {headers:this.setHeader()})
  }

}
