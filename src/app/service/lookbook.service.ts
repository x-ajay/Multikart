import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookbookService {

  // public imgUrl="http://localhost:3000/lookbook1"

  constructor(private http:HttpClient) { }

  // getlookbookData(){
  //  return this.http.get(this.imgUrl);
  // }


}
