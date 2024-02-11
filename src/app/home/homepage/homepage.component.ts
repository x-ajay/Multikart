import { Component } from '@angular/core';
import { HomepageService } from '../../service/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public formdata: any = [];
  constructor(private dt: HomepageService) {

  }
  getdata1() {
    // this.dt.gethomeApidata().subscribe({
    //   next: (res: any) => {
    //     this.formdata = console.log(res);
    //   },
    //   err: (err: any) => { console.log(err); },
    //   complete: () => { console.log('done'); }
    // });
  }
}


