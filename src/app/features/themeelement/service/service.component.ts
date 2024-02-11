import { Component, OnInit } from '@angular/core';
import { ThemeelementService } from '../themeservice/themeelement.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{
  public showserv : any = [];
  public showserv2 : any = [];
  public showserv3 : any = [];
  constructor(private serv : ThemeelementService){
 
  }
  ngOnInit(): void {
    this.showData();
    this.showData2();
    this.showData3();
  }

  showData(){
    this.serv.getData5().subscribe(
      (res:any)=>{
        console.log(res);
        this.showserv = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }

  showData2(){
    this.serv.getData6().subscribe(
      (res:any)=>{
        console.log(res);
        this.showserv2 = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }

  showData3(){
    this.serv.getData7().subscribe(
      (res:any)=>{
        console.log(res);
        this.showserv3 = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }
}
