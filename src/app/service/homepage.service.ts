import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) {


  }
  gethomeApidata() {
    return this.http.get("http://localhost:3000/home");
  }
  gethomeApidata1() {
    return this.http.get("http://localhost:3000/insta");
  }
  gethomeApidata2() {
    return this.http.get("http://localhost:3000/logos");
  }
  gethomeApidata3() {
    return this.http.get("http://localhost:3000/top");
  }
}
