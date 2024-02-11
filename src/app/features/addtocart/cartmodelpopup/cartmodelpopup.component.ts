import { Component, OnInit } from '@angular/core';
import { CardmodelpopupService } from '../services/cardmodelpopup.service';

@Component({
  selector: 'app-cartmodelpopup',
  templateUrl: './cartmodelpopup.component.html',
  styleUrls: ['./cartmodelpopup.component.css']
})
export class CartmodelpopupComponent implements OnInit{
  public active1 : string = "black";
  public active2 : string = "black";
  public active3 : string = "black";
  public productData : any = [];

  public showData : boolean = true;
  public showData1 : boolean = false;
  public showData2 : boolean = false;

  public productData1 : any = [];
  public productData2 : any = [];
  public productData3 : any = [];
  
  public specialProData : any = [];
  public instaData : any = [];

  rating: number = 4; // Example rating value
  stars: number[] = [1, 2, 3, 4,5]; // Number of stars

  constructor(private cmps : CardmodelpopupService){
 
  
  }

  // method for winter
  showcontent1(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.showData1 = false;
    this.showData = true;
    this.showData2 =false; 
  
    if(this.showData == true){
      this.active2 = "black";
      this.active1 = " #81ba00";
      this.active3 = " black";
  }
}

  // method for greens
  showcontent2(event: MouseEvent) {
    const listItem2 = event.target as HTMLElement;
  
    this.greens();
    this.showData = false;
    this.showData1 = true;
    this.showData2 = false;
    if(this.showData1 == true){
      this.active1 = "black";
      this.active2 = " #81ba00";
      this.active3 = " black";
  }
    console.log('List item clicked:', listItem2.textContent);
  }

  // method for various
  showcontent3(event: MouseEvent) {
    const listItem2 = event.target as HTMLElement;
  
    this.various();
    this.showData = false;
    this.showData1 = false;
    this.showData2 = true;
    if(this.showData2 == true){
      this.active3 = "#81ba00";
      this.active1 = " balck";
      this.active2 = " black";
  }
  }

  ngOnInit(): void {
    this.getApiData();
    
    this.getApiDataSpePro();
    this.getInstagram();
    this.winter();
  }
  getApiData(){
    this.cmps.getData().subscribe(
      (res:any)=>{
        console.log(res);
        this.productData = res;
    },
    (err:any)=>{
      console.log(err);
    })
  }

  // function for winter
  winter(){

    this.cmps.getData1().subscribe(
      (res:any)=>{
        console.log(res);
        this.productData1 = res;
    },
    (err:any)=>{
      console.log(err);
    })
  }
// function for greens
  greens(){
    this.cmps.getData2().subscribe(
      (res:any)=>{
        console.log(res);
        this.productData2 = res;
    },
    (err:any)=>{
      console.log(err);
    })
  }

  various(){
    this.cmps.getData3().subscribe(
      (res:any)=>{
        console.log(res);
        this.productData3 = res;
    },
    (err:any)=>{
      console.log(err);
    })
  }



  // special products

  getApiDataSpePro(){
    this.cmps.getDataSpeProduct().subscribe(
      (res:any)=>
      {
        console.log(res);
        this.specialProData = res;
      },
      (err:any)=>{
        console.log(err);
      });
      
  }

  // instagram

  getInstagram(){
    this.cmps.getInstaApi().subscribe(
      (res:any)=>
      {
        console.log(res);
        this.instaData = res;
      },
      (err:any)=>
      {
        console.log(err);
      });
  }
}
