import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullPageService {
  public fullpageUrl="http://localhost:3000/fullPage"
  constructor(private http:HttpClient) { }

  getImages(){
    return this.http.get(this.fullpageUrl);
  }
}
