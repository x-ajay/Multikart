import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from 'src/app/pages/service/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent {
  public data1: any = [];
  public furnitureData: any = [];
  public furnitureData1: any[] = [];
  constructor(
    private productService: DataService,
    private cartService: CartService,
    private messageService: MessageService
  ) {
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
  rating: number = 4; // Example rating value
  stars: any[] = [1, 2, 3, 4, 5]; // Number of stars

  //img click event
  onClick(proData: any) {
    this.cartService.addToCart(proData);
    console.log('hello');
    this.show();
  }
  show() {
    this.messageService.add({
      severity: 'success',
      detail: 'Product Added Successfully',
    });
  }
}
