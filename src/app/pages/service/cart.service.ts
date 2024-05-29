import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartList.push(product);
    this.productList.next(this.cartList);
    console.log(this.cartList);
  }
  removeCart(item: any) {
    let index = this.cartList.findIndex((ele: any) => ele.id == item.id);
    if (index != -1) {
      this.cartList.splice(index, 1);
    }
    this.productList.next(this.cartList);
  }
  removeAllItem() {
    this.cartList = [];
    this.productList.next(this.cartList);
  }
}
