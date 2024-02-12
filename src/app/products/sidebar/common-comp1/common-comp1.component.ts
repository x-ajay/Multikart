import { Component } from '@angular/core';
import { ProductsAService } from 'src/app/service/products-a.service';

@Component({
  selector: 'app-common-comp1',
  templateUrl: './common-comp1.component.html',
  styleUrls: ['./common-comp1.component.css']
})
export class CommonComp1Component {
  public products: any[] = [];

  public show:boolean=true;

  //   public  ratedStars = 4; // Number of stars to be rated

  constructor(private api: ProductsAService) {
      this.getimages();
  }

  getimages() {
      this.api.getProducts().then((products: any) => {
          this.products = products;
          console.log('Products:', this.products);
      }
      )
  }

  public showSecondImage: boolean[] = []

  // Include your product service injection and other necessary code

  addToCart(product: any) {
    // Implement your add to cart logic
    console.log('Adding to cart:', product);
  }

  addToWishlist(product: any) {
    // Implement your add to wishlist logic
    console.log('Adding to wishlist:', product);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
