import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  user:any;

  constructor() { }

  getUser = () => {
    return this.user
  }

  setUser = (data) => {
    this.user = data
    console.log("data: " ,data.user.id)
  }
}
