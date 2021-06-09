import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getData(){
    let url="https://api.github.com/users/GuzalBulatova";
    return this.http.get(url);
  }
}