import { Component } from '@angular/core';
import { HomepageService } from '../../service/homepage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public formdata: any[] = [];
  public formdata1: any[] = [];
  public formdata2: any[] = [];
  public formdata3: any[] = [];
  public imagep: any = "../../../assets/Images/col1.jpg";
  public imagep1: any = "../../../assets/Images/col2.jpg";
  public imagep2: any = "../../../assets/Images/blog1.jpg";
  public imagep3: any = "../../../assets/Images/blog2.jpg";
  public imagep4: any = "../../../assets/Images/blog3.jpg";
  public imagep5: any = "https://multikart-react-reactpixelstrap.vercel.app/assets/images/pro3/6.jpg";
  public imagep6: any = "https://multikart-react-reactpixelstrap.vercel.app/assets/images/pro3/10.jpg";


  constructor(private dt: HomepageService) {
    this.getdata1();
    this.getdata2();
    this.getdata3();
    this.getdata4();
  }
  onover() {
    this.imagep5;
  }
  onout() {
    this.imagep6;
  }
  getdata1() {
    this.dt.gethomeApidata().subscribe({
      next:(res:any) => {
        console.log(res);
        this.formdata = res;
      },
      error:(err:any)=>{console.log(err)},
      complete:()=>{console.log("data send successfully")},
    });
  }
  getdata2() {
    this.dt.gethomeApidata1().subscribe({
      next:(res:any) => {
        console.log(res);
        this.formdata1 = res;
      },
      error:(err:any)=>{console.log(err)},
      complete:()=>{console.log("data send successfully")},
    });
  }
   getdata3() {
    this.dt.gethomeApidata2().subscribe({
      next:(res:any) => {
        console.log(res);
        this.formdata2 = res;
      },
      error:(err:any)=>{console.log(err)},
      complete:()=>{console.log("data send successfully")},
    });
  }
  getdata4() {
    this.dt.gethomeApidata3().subscribe({
      next:(res:any) => {
        console.log(res);
        this.formdata3 = res;
      },
      error:(err:any)=>{console.log(err)},
      complete:()=>{console.log("data send successfully")},
    });
  }
}


