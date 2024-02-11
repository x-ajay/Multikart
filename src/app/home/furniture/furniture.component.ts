import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent {
  public data1: any = [];
  public furnitureData: any = [];
  public furnitureData1: any[] = [];
  constructor(private productService: DataService) {
    this.featchData();
    this.featchProductData();
  }

  featchData() {
    this.productService.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.data1 = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  featchProductData() {
    this.productService.getProductData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.furnitureData = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  products: any[] = [];

  responsiveOptions: any[] = [];

  ngOnInit() {
    this.productService.getProductData1().then((products: any) => {
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
}
