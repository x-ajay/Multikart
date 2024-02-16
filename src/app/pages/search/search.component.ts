import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsAService } from 'src/app/service/products-a.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public search_input: string = '';
  public Allproducts: any;
  public showSecondImage: boolean[] = [];

  public searchkey: string = '';

  constructor(private Api: ProductsAService) {
    this.getResult();
  }




  getResult() {
    this.Api.getAllProducts().subscribe({
      next: (res: any) => {
        this.Allproducts = res;
        console.log(res);

      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  search() {
    this.searchkey = this.search_input;
    console.log(this.search_input);
  }



  addToCart(product: any) {

    console.log('Adding to cart:', product);
  }

  addToWishlist(product: any) {

    console.log('Adding to wishlist:', product);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
