import { Component, OnInit,Input } from '@angular/core';
import { Electronic1Service } from 'src/app/service/electronic1.service';

@Component({
  selector: 'app-electronics1',
  templateUrl: './electronics1.component.html',
  styleUrls: ['./electronics1.component.css']
})
export class Electronics1Component implements OnInit{

    public ElectronicData1:any[]=[];
    public ElectronicData2:any[]=[];
    currentRating: number = 0;

constructor(private electronic1:Electronic1Service){
  this.fetchData1();
}


ngOnInit(): void {
  this.electronic1.getElectronic1Data1().subscribe(
    (res:any)=>{
     this.ElectronicData1=res;
    }
  )
}

fetchData1(){
  this.electronic1.getElectronic1Data3().subscribe(
    (res:any)=>{
      this.ElectronicData2=res;
    }
  )
}



onClick(){
  this.electronic1.getElectronic1Data3().subscribe(
    (res:any)=>{
      this.ElectronicData2=res;
    }
  )
}
}
