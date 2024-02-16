import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonproductpageService } from 'src/app/service/commonproductpage.service';
import { ProductsAService } from 'src/app/service/products-a.service';

@Component({
  selector: 'app-products-common-page',
  templateUrl: './products-common-page.component.html',
  styleUrls: ['./products-common-page.component.css']
})
export class ProductsCommonPageComponent {


  public products: any[] = [];

  public specificProduct: any=[];

  // public all:any;
  //   public  ratedStars = 4; // Number of stars to be rated

  constructor(private api: ProductsAService, private route: Router, private commonpage: CommonproductpageService) {
    this.getallproducts();
    this.getproductData();
  }

  getallproducts() {
    this.api.getProducts().then((products: any) => {
      this.products = products;
      console.log('Products:', this.products);
    });
  }

  // main banner 

  getproductData() {
    this.commonpage.products$.subscribe({
      next: (data: any) => {
        this.specificProduct = [data];
    console.log(data);
    
      }
    });
  }






  // code for product description 
  setActive(index: any) {
    const items = document.querySelectorAll('.desc-nav');
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
  }

  //   code for main banner  image gallery


  public images: any[] = [];


  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  _activeIndex: number = 2;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];



  // ngOnInit() {
  //     this.api.getProducts().then((images) => (this.images = images));
  // }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }


  // quntity counter
  public quantity: number = 1;
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    // You can set a maximum limit if needed
    // For example, limit the quantity to 10
    const maxQuantity = 6;
    if (this.quantity < maxQuantity) {
      this.quantity++;
    }
  }

  //   timer 
  public days!: number;
  public hours!: number;
  public minutes!: number;
  public seconds!: number;

  ngOnInit() {
    // Set your target date and time (replace this with your desired date and time)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 9); // Add 9 days to the current date
    // Update timer every second
    setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }, 1000);
  }

  GotoCart() {
    // this.api.getProducts(data)
    this.route.navigate(['pages/cart'])
  }
  Checkout() {
    this.route.navigate(['pages/cart'])
  }
}