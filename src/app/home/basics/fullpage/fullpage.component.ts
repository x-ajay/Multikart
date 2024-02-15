import { Component } from '@angular/core';
import { FullPageService } from 'src/app/service/full-page.service';

@Component({
  selector: 'app-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.css']
})
export class FullpageComponent {

  // images: any[] | undefined;

  // responsiveOptions: any[] = [
  //     {
  //         breakpoint: '1024px',
  //         numVisible: 5
  //     },
  //     {
  //         breakpoint: '768px',
  //         numVisible: 3
  //     },
  //     {
  //         breakpoint: '560px',
  //         numVisible: 1
  //     }
  // ];

  // constructor(private fullPage: FullPageService) {}

  //   ngOnInit() {
  //       this.fullPage.getImages().then((images) => {
  //           this.images = images;
  //       });
  //   }
}
