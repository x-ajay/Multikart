import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  getSeverity(arg0: any): string {
    throw new Error('Method not implemented.');
  }
  public cartData: any = [];
  products: any;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.getcartData();
  }
  getcartData() {
    this.cartService.getProduct().subscribe({
      next: (res: any) => {
        this.cartData = res;
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onDelete(product: any) {
    this.cartService.removeCart(product);
  }
}
