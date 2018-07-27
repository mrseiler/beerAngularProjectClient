import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  user:any;
  uid:any;
  constructor() { }

  getUser = () => {
    return this.user
  }

  setUser = (data) => {
    
    // localStorage.setItem('uid', data.user.id)
  }
}
