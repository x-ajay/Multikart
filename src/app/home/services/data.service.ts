import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { plantproduct } from '../../plantproduct';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getProductsSmall() {
    throw new Error('Method not implemented.');
  }
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
  getvegData1() {
    return this.http.get('http://localhost:3000/vegetableData1');
  }
  getvegData2(): Promise<any> {
    return this.http.get('http://localhost:3000/vegetableData2').toPromise();
  }
  getwatchData1() {
    return this.http.get('http://localhost:3000/watchData1');
  }
  getwatchData2() {
    return this.http.get('http://localhost:3000/watchData2');
  }
  getwatchData3(): Promise<any> {
    return this.http.get('http://localhost:3000/watchData3').toPromise();
  }
  getwatchData4() {
    return this.http.get('http://localhost:3000/watchData4');
  }
  getwatchData5(): Promise<any> {
    return this.http.get('http://localhost:3000/watchData5').toPromise();
  }
  getwatchData6() {
    return this.http.get('http://localhost:3000/watchData6');
  }
  getLightData1() {
    return this.http.get('http://localhost:3000/lightData1');
  }
  getData11() {
    return this.http.get<plantproduct[]>('http://localhost:3000/trendkids1');
  }

  getData1() {
    return this.http.get<plantproduct[]>('http://localhost:3000/trendwoman');
  }
  getData2() {
    return this.http.get<plantproduct[]>('http://localhost:3000/trendman');
  }
  getData3() {
    return this.http.get<plantproduct[]>(
      'http://localhost:3000/trendschoolbag'
    );
  }
  getData4() {
    return this.http.get<plantproduct[]>('http://localhost:3000/cartopspepro');
  }

  getData5() {
    return this.http.get<plantproduct[]>('http://localhost:3000/instacarttop');
  }
}
