import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsAService {

  constructor(private http:HttpClient) { }

  getProducts():Promise<any> {
    return  this.http.get("http://localhost:3000/products").toPromise()
  }
}
