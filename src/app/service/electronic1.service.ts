import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Electronic1Service {

  public url2:any="http://localhost:3000/Electronic1.2";
  public url3:any="http://localhost:3000/Electronic1.3"
  constructor(private http:HttpClient) {

  }


  getElectronic1Data1(){
    return this.http.get(this.url2);
  }

  getElectronic1Data3(){
    return this.http.get(this.url3);
  }

}
