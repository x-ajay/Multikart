import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collecbanner } from '../themeelement';

@Injectable({
  providedIn: 'root'
})
export class ThemeelementService {

  constructor( private http : HttpClient) { }
  getData(){
    return this.http.get<collecbanner[]>("http://localhost:3000/menwomen");
  }
  getData2(){
    return this.http.get<collecbanner[]>("http://localhost:3000/elec");
  }
  getData3(){
    return this.http.get<collecbanner[]>("http://localhost:3000/watch");
  }
  getData4(){
    return this.http.get<collecbanner[]>("http://localhost:3000/newitem");
  }
  getData5(){
    return this.http.get<collecbanner[]>("http://localhost:3000/serv1");
  }
  getData6(){
    return this.http.get<collecbanner[]>("http://localhost:3000/serv2");
  }
  getData7(){
    return this.http.get<collecbanner[]>("http://localhost:3000/serv3");
  }
}

