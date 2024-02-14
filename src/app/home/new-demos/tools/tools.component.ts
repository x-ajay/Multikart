import { Component ,OnInit} from '@angular/core';
import { FortoolsService } from 'src/app/service/fortools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  public CarouText1:any=[];
  public CarouText2:any=[];
  public btnData1:any=[];
  public middHead:any=[];
  public btnData2:any=[];
 constructor(private fortools:FortoolsService){
            
  

}
  ngOnInit() {
    this.fortools.CarouText1().subscribe(
      (res:any)=>{
        this.CarouText1=res;
      },
      (err:any)=>{
        console.log(err);
      }
    )



    this.fortools.CarouText2().subscribe(
      (res:any)=>{
        this.CarouText2=res;
      }
    )

    this.fortools.btnData1().subscribe(
      (res:any)=>{
        this.btnData1=res;
      }
    )
    

    this.fortools.middHead().subscribe(
      (res:any)=>{
        this.middHead=res;
      }
    )

    this.fortools.btnData2().subscribe(
      (res:any)=>{
        this.btnData2=res;
      }
    )
  }

}

