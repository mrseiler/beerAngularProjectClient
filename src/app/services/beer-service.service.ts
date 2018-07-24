import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor(private http: HttpClient) { }

  getBeers(){
    return this.http.get('http://localhost:3000/api/beer/getallbeers')
  }

  // login(loginInfo) {
  //   return this.http.post(`http://localhost:3000/api/user/login`, loginInfo)
  //   .subscribe( (token) => {
  //     console.log(token);
  //     var data = Object.values(token);
  //     localStorage.setItem('token', data[2]);
  //     console.log("localstorage: ", localStorage)
  //     this.isLoggedIn.next(true);
  //     this.router.navigate(['/mainnav']);
  //   },
  //   err => {
  //     console.log(err);
  //     alert("Invalid Username/Password combination");
  //   }
  // )
  // }


}
