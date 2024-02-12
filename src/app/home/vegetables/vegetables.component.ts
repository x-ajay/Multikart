import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css'],
})
export class VegetablesComponent {
  public vegData1: any[] = [];
  constructor(private dt: DataService) {
    this.getVegData1();
  }

  getVegData1() {
    this.dt.getvegData1().subscribe({
      next: (res: any) => {
        console.log(res);
        this.vegData1 = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
