import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonproductpageService } from 'src/app/service/commonproductpage.service';
import { ProductsAService } from 'src/app/service/products-a.service';

@Component({
  selector: 'app-common-comp1',
  templateUrl: './common-comp1.component.html',
  styleUrls: ['./common-comp1.component.css'],
  // encapsulation: ViewEncapsulation.None 
})
export class CommonComp1Component {
  public products: any[] = [];

  public show:boolean=true;

  //   public  ratedStars = 4; // Number of stars to be rated

  constructor(private api: ProductsAService,private commonpage:CommonproductpageService,private route:Router) {
      this.getimages();
  }

  getimages() {
      this.api.getProducts().then((products: any) => {
          this.products = products;
          // console.log('Products:', this.products);
      }
      )
  }

  public showSecondImage: boolean[] = []



  addToCart(product: any) {

    console.log('Adding to cart:', product);
  }

  addToWishlist(product: any) {
  
    console.log('Adding to wishlist:', product);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  GotoInfoPage(product:any){
    console.log(product);
    
    this.commonpage.setvalue(product)
    
    this.route.navigate(['product/productpage'])
  }
}
