import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonproductpageService {

private product =new BehaviorSubject('')

public products$=this.product.asObservable();

  constructor(private http:HttpClient) { }

 setvalue(data:any){
  console.log('Setting value in CommonproductpageService:', data);
  return this.product.next(data);
 }

}
