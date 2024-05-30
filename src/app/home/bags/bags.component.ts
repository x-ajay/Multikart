import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css'],
})
export class BagsComponent {
  constructor(public cts: DataService) {}

  public active: string = 'black';
  public active1: string = 'black';
  public active2: string = 'black';
  public active3: string = 'black';
  public active4: string = 'black';

  kidsData: any = [];
  womanData: any = [];
  manData: any = [];
  showserv3: any = [];
  schoolbagData: any = [];
  newarrivalData: any[] = [];
  specialData: any = [];
  instaData: any = [];
  showData: boolean = true;
  showData1: boolean = false;
  showData2: boolean = false;
  showData3: boolean = false;
  showData4: boolean = false;

  rating: number = 4; // Example rating value
  stars: number[] = [1, 2, 3, 4, 5]; // Number of stars

  ngOnInit(): void {
    this.newarrival();
    // this.showData5();
    this.woman();
    this.speproduct();
    this.instacarttop();
  }

  // showData5(){
  //   this.serv.getData7().subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //       this.showserv3 = res;
  //     },
  //     (err:any)=>{
  //       console.log(err);
  //     });
  // }

  // method for kids
  showcontent(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.newarrival();
    this.showData = true;
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = false;
    this.showData4 = false;
    if (this.showData == true) {
      this.active1 = 'black';
      this.active2 = 'black';
      this.active = ' #f0b54d';
      this.active3 = ' black';
      this.active4 = 'black';
    }
  }

  showcontent1(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.woman();
    this.showData = false;
    this.showData1 = true;
    this.showData2 = false;
    this.showData3 = false;
    this.showData4 = false;
    if (this.showData1 == true) {
      this.active = 'black';
      this.active2 = 'black';
      this.active1 = ' #f0b54d';
      this.active3 = ' black';
      this.active4 = 'black';
    }
  }

  showcontent2(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.man();
    this.showData = false;
    this.showData1 = false;
    this.showData2 = true;
    this.showData3 = false;
    this.showData4 = false;
    if (this.showData2 == true) {
      this.active = 'black';
      this.active1 = 'black';
      this.active2 = ' #f0b54d';
      this.active3 = ' black';
      this.active4 = 'black';
    }
  }

  showcontent3(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.kids();
    this.showData = false;
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = true;
    this.showData4 = false;
    if (this.showData3 == true) {
      this.active = 'black';
      this.active2 = 'black';
      this.active3 = ' #f0b54d';
      this.active1 = ' black';
      this.active4 = 'black';
    }
  }

  showcontent4(event: MouseEvent) {
    const listItem1 = event.target as HTMLElement;
    this.schoolbag();
    this.showData = false;
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = false;
    this.showData4 = true;
    if (this.showData4 == true) {
      this.active = 'black';
      this.active2 = 'black';
      this.active4 = ' #f0b54d';
      this.active3 = ' black';
      this.active1 = 'black';
    }
  }
  kids() {
    this.cts.getData().subscribe(
      (res: any) => {
        console.log(res);
        this.kidsData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  woman() {
    this.cts.getData11().subscribe(
      (res: any) => {
        console.log(res);
        this.womanData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  man() {
    this.cts.getData2().subscribe(
      (res: any) => {
        console.log(res);
        this.manData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  schoolbag() {
    this.cts.getData3().subscribe(
      (res: any) => {
        console.log(res);
        this.schoolbagData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  newarrival() {
    this.cts.getData3().subscribe(
      (res: any) => {
        console.log(res);
        this.newarrivalData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  speproduct() {
    this.cts.getData4().subscribe(
      (res: any) => {
        console.log(res);
        this.specialData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  instacarttop() {
    this.cts.getData5().subscribe(
      (res: any) => {
        console.log(res);
        this.instaData = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
