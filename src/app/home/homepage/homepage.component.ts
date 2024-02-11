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
  public imagep: any = "../../../assets/Images/col1.jpg";
  public imagep1: any = "../../../assets/Images/col2.jpg";
  public imagep2: any = "../../../assets/Images/blog1.jpg";
  public imagep3: any = "../../../assets/Images/blog2.jpg";
  public imagep4: any = "../../../assets/Images/blog3.jpg";

  constructor(private dt: HomepageService) {
    this.getdata1();
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
}


