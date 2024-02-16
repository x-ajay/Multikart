import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {

  // public parallaxUrl="http://localhost:3000/parallax";
  constructor(private http:HttpClient) { }

  // getParallaxData(){
  //   return this.http.get(this.parallaxUrl);
  // }
}
