import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/furnitureproduct');
  }

  getProductData() {
    return this.http.get('http://localhost:3000/furnitureproduct2');
  }
  getProductData1(): Promise<any> {
    return this.http.get('http://localhost:3000/furnitureproduct3').toPromise();
  }
}
