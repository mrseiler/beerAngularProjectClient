import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {
  public setHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('authorization', `${localStorage.token}`);
  }

  constructor(private http: HttpClient) { }

  getBeers(page){
    return this.http.get(`${APIURL}/api/beer/getallbeers`, {headers:this.setHeader()})
    .pipe()
  }

  addBeer(beer){
    return this.http.post(`${APIURL}/api/beer/createbeer`, beer, {headers:this.setHeader()})
    .pipe()
  }

  getOneBeer(id){
    return this.http.get(`${APIURL}/api/beer/getonebeer/${id}`, {headers:this.setHeader()})
    .pipe()
  }

  editRating(name, rating){ 
    return this.http.put(`${APIURL}/api/beer/addrating/${name}`, rating, {headers:this.setHeader()})
  }

  editBeer(beer, id){
    return this.http.put(`${APIURL}/api/beer/editbeer/${id}`, beer, {headers:this.setHeader()})
  }

  searchBeer(value, term){
    return this.http.get(`${APIURL}/api/beer/searchbeer/${value}/${term}`, {headers:this.setHeader()})
    .pipe()
  }

  deleteBeer(id){
    return this.http.delete(`${APIURL}/api/beer/deletebeer/${id}`, {headers:this.setHeader()})
  }

}
