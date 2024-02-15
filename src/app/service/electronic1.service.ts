import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Electronic1Service {
  public url1= "http://localhost:3000/Electronic1"
  constructor(private http:HttpClient) {

  }

  getElectronic1Data(){
    return this.http.get(this.url1);
  }
}
