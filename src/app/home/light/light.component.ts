import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent {
  public lightData: any = [];
  constructor(private ligthService: DataService) {
    this.getlightData();
  }
  getlightData() {
    this.ligthService.getLightData1().subscribe({
      next: (res: any) => {
        this.lightData = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
