import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsAService } from 'src/app/service/products-a.service';

@Component({
    selector: 'app-left-image',
    templateUrl: './left-image.component.html',
    styleUrls: ['./left-image.component.css']
})
export class LeftImageComponent {
    GotoCart() {
        this.route.navigate(['pages/cart'])
    }
    Checkout() {
        this.route.navigate(['pages/cart'])
    }

    public products: any[] = [];
    public productDescription: any[] = [];

    //   public  ratedStars = 4; // Number of stars to be rated

    constructor(private api: ProductsAService, private route: Router) {
        this.getimages();
    }

    getimages() {
        this.api.getProducts().then((products: any) => {
            this.products = products;
            // this.images = products;
            console.log('Products:', this.products);

            // main banner 
            // Transform the API response to match the expected structure
            this.images = products;

            // for product description 
            this.productDescription = products;
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
}
