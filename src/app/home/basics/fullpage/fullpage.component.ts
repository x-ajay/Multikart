import { Component, OnInit } from '@angular/core';
import { FullPageService } from 'src/app/service/full-page.service';

@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.css']
})
export class FullpageComponent implements OnInit {
  public fullpageImage: any[] = [];

  constructor(private fullPage:FullPageService) {}
      ngOnInit(): void {
        this.fullPage.getImages().subscribe(
          (res:any)=>{
            this.fullpageImage=res;
          }
        )
      }

}
