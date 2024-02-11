import { Component, OnInit } from '@angular/core';
import { ThemeelementService } from '../themeservice/themeelement.service';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.css']
})
export class CollectionBannerComponent implements OnInit{
  public showData : any = [];
  public showData1 : any = [];
  public showData2 : any = [];
  public showData3 : any = [];
  constructor(private tes : ThemeelementService){

  }
  ngOnInit(): void {
    this.showDataApi();
    this.showDataApi1();
    this.showDataApi2();
    this.showDataApi3();
  }

  showDataApi(){
    this.tes.getData().subscribe(
      (res:any)=>{
        console.log(res);
        this.showData = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }

  showDataApi1(){
    this.tes.getData2().subscribe(
      (res:any)=>{
        console.log(res);
        this.showData1 = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }

  showDataApi2(){
    this.tes.getData3().subscribe(
      (res:any)=>{
        console.log(res);
        this.showData2 = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }

  showDataApi3(){
    this.tes.getData4().subscribe(
      (res:any)=>{
        console.log(res);
        this.showData3 = res;
      },
      (err:any)=>{
        console.log(err);
      });
  }
}
