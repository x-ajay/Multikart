import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullPageService {

  constructor(private http:HttpClient) { }

  getImages(){

  }
}
