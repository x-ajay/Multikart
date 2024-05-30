import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
})
export class WatchComponent {
  public watchData1: any = [];
  public watchData2: any = [];
  public watchData3: any[] = [];
  public watchData4: any = [];
  public watchData5: any = [];
  public watchData6: any = [];

  public active1: string = 'black';
  public active2: string = 'black';
  public active3: string = 'black';
  public active4: string = 'black';
  public showData1: boolean = true;
  public showData2: boolean = false;
  public showData3: boolean = false;
  public showData4: boolean = false;
  constructor(private productService: DataService) {
    this.getWatchData1();
    this.getWatchData2();
    this.getWatchData3();
    this.getWatchData4();
    this.getWatchData5();
    this.getWatchData6();
  }

  getWatchData1() {
    this.productService.getwatchData1().subscribe({
      next: (res: any) => {
        console.log(res);
        this.watchData1 = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getWatchData2() {
    this.productService.getwatchData2().subscribe({
      next: (res: any) => {
        console.log(res);
        this.watchData2 = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getWatchData3() {
    this.productService
      .getwatchData3()
      .then((res: any) => {
        console.log(res);
        this.watchData3 = res;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  getWatchData4() {
    this.productService.getwatchData4().subscribe({
      next: (res: any) => {
        console.log(res);
        this.watchData4 = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getWatchData5() {
    this.productService
      .getwatchData5()
      .then((res: any) => {
        console.log(res);
        this.watchData5 = res;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  getWatchData6() {
    this.productService.getwatchData6().subscribe({
      next: (res: any) => {
        console.log(res);
        this.watchData6 = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  // tabview
  unisex(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.showData1 = true;
    this.showData2 = false;
    this.showData3 = false;
    console.log('List item clicked:', listItem1.textContent);
    this.showData4 = false;
    if (this.showData1) {
      this.active1 = '#e4604a';
      this.active2 = 'black';
      this.active3 = 'black';
      this.active4 = 'black';
    }
  }

  couple(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.showData1 = false;
    this.showData2 = true;
    this.showData3 = false;
    this.showData4 = false;
    console.log('List item clicked:', listItem1.textContent);
    if (this.showData2) {
      this.active1 = 'black';
      this.active2 = '#e4604a';
      this.active3 = 'black';
      this.active4 = 'black';
    }
  }
  titanium(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = true;
    console.log('List item clicked:', listItem1.textContent);
    this.showData4 = false;
    if (this.showData3) {
      this.active1 = 'black';
      this.active2 = 'black';
      this.active3 = '#e4604a';
      this.active4 = 'black';
    }
  }
  gold(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = false;
    console.log('List item clicked:', listItem1.textContent);
    this.showData4 = true;
    if (this.showData4) {
      this.active1 = 'black';
      this.active2 = 'black';
      this.active3 = 'black';
      this.active4 = '#e4604a';
    }
  }
  // statr
  rating: number = 4; // Example rating value
  stars: any[] = [1, 2, 3, 4, 5]; // Number of stars

  products: any[] = [];
  products1: any[] = [];

  responsiveOptions: any[] = [];

  ngOnInit() {
    // Set your target date and time (replace this with your desired date and time)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 9); // Add 9 days to the current date
    // Update timer every second
    setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.Hrs = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.Min = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.Sec = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }, 1000);

    //slide carosole
    this.productService.getwatchData3().then((products: any) => {
      this.products = products;
    });
    this.productService.getwatchData5().then((products1: any) => {
      this.products1 = products1;
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

  //  timer
  public days!: number;
  public Hrs!: number;
  public Min!: number;
  public Sec!: number;
}
