import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsAService {

  constructor(private http:HttpClient) { }

  getProducts():Promise<any> {
    return  this.http.get("http://localhost:3000/ABproducts").toPromise()
  }

  getAllProducts():Observable<any>{
    return  this.http.get("http://localhost:3000/AllProducts")
  }
}
