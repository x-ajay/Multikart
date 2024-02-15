import { Component } from '@angular/core';
import { Electronic1Service } from 'src/app/service/electronic1.service';

@Component({
  selector: 'app-electronics1',
  templateUrl: './electronics1.component.html',
  styleUrls: ['./electronics1.component.css']
})
export class Electronics1Component {
    public electronicData:any[]=[];
constructor(private electronic1:Electronic1Service){
  this.getData();
}

getData(){
  this.electronic1.getElectronic1Data().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.electronicData=res;
    }
  })



}
}
