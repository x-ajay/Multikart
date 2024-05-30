import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css'],
})
export class VegetablesComponent {
  public vegData1: any[] = [];
  public vegData2: any[] = [];
  constructor(private dt: DataService) {
    this.getVegData1();
  }

  getVegData1() {
    this.dt.getvegData1().subscribe({
      next: (res: any) => {
        console.log(res);
        this.vegData1 = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  // getVegData2() {
  //   this.dt.getvegData2().subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.vegData2 = res;
  //     },
  //     error: (err: any) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // getVegData2() {
  //   this.dt.getvegData2().subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.vegData2 = res;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  products: any[] = [];

  responsiveOptions: any[] = [];

  ngOnInit() {
    this.dt.getvegData2().then((products: any) => {
      this.products = products;
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
  rating: number = 4; // Example rating value
  stars: any[] = [1, 2, 3, 4, 5]; // Number of stars
}
