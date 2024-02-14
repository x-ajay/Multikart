import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class FortoolsService {

  constructor(private http:HttpClient) { }



  CarouText1(){
    return this.http.get('assets/dbForTools.json')
  }
  CarouText2(){
    return this.http.get('assets/dbForTools.json')
  }
  btnData1(){
    return this.http.get('assets/dbForTools.json')
  }
  middHead(){
    return this.http.get('assets/dbForTools.json')
  }
  btnData2(){
    return this.http.get('assets/dbForTools.json')
  }
}
