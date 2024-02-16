import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-four-image',
  templateUrl: './four-image.component.html',
  styleUrls: ['./four-image.component.css']
})
export class FourImageComponent {
  // images
  public img1="../../../assets/Images/pro3/001.fb2774aa.jpg";
  public img2="../../../assets/Images/pro3/002.56d02228.jpg";
  public img3="../../../assets/Images/pro3/003.b59d96eb.jpg";
  public img4="../../../assets/Images/pro3/004.ee6aaa49.jpg";

  //links
  public facebook="https://www.facebook.com";
  public google="https://plus.google.com";
  public twitter="https://twitter.com";
  public instagram="https://www.instagram.com";
  public rss="https://rss.com";

  public products: any=[];

  constructor(private http: HttpClient) { }

  //   timer 
  public days!: number;
  public hours!: number;
  public minutes!: number;
  public seconds!: number;

  ngOnInit(): void {
    this.http.get('../../assets/db.json').subscribe(data => {
      this.products = data;
    });


    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10); // Add 10 days to the current date
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

  getStarRating(rating: number): number[] {
    const stars = Math.floor(rating);
    const remainder = rating - stars;
    const starArray = Array(stars).fill(1);
    if (remainder >= 0.5) {
      starArray.push(0.5);
    }
    return starArray;
  }



  // quntity counter
public InStock:any="InStock";
public quantity: number = 1;

decreaseQuantity() {
    if (this.quantity > 1) {
        this.quantity--;
        this.InStock="InStock"
    }
}

increaseQuantity() {
    // You can set a maximum limit if needed
    // For example, limit the quantity to 10
    const maxQuantity = 6;
    if (this.quantity < maxQuantity) {
        this.quantity++;
    }
    else{
      this.InStock="Out of Stock !"
    }
}
   
// Buttons

  //  ngOnInit() {
  //      // Set your target date and time (replace this with your desired date and time)
  //      const targetDate = new Date();
  //      targetDate.setDate(targetDate.getDate() + 9); // Add 9 days to the current date
  //      // Update timer every second
  //      setInterval(() => {
  //          const currentDate = new Date();
  //          const timeDifference = targetDate.getTime() - currentDate.getTime();

  //          this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  //          this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //          this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  //          this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  //      }, 1000);
  //  }
}
