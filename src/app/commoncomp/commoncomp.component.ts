import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-commoncomp',
  templateUrl: './commoncomp.component.html',
  styleUrls: ['./commoncomp.component.css'],
})
export class CommoncompComponent {
  products1: any[] = [];

  responsiveOptions: any[] = [];
  public watchData5: any[] = [];

  constructor(private productService: DataService) {
    this.getWatchData5();
  }
  getWatchData5() {
    this.productService
      .getwatchData5()
      .then((res: any) => {
        console.log(res);
        this.watchData5 = res;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  ngOnInlit() {
    this.productService.getwatchData5().then((products1: any) => {
      this.products1 = products1;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
