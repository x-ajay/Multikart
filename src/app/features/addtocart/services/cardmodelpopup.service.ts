import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plantproduct } from '../cardmodelpopup';

@Injectable({
  providedIn: 'root'
})
export class CardmodelpopupService {

  constructor(private http: HttpClient) { 
    
  }

  getData(){
    return this.http.get<plantproduct[]>("http://localhost:3000/plantproduct");
  }
  getData1(){
    return this.http.get<plantproduct[]>("http://localhost:3000/plantproduct1");
  }
  getData2(){
    return this.http.get<plantproduct[]>("http://localhost:3000/plantproduct2");
  }
  getData3(){
    return this.http.get<plantproduct[]>("http://localhost:3000/plantproduct3");
  }
  

  getDataSpeProduct(){
    return this.http.get<plantproduct[]>("http://localhost:3000/specialproduct");
  }

  getInstaApi(){
    return this.http.get<plantproduct[]>("http://localhost:3000/instagram");
  }
}
