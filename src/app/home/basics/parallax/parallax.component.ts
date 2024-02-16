import { Component, Input, OnInit } from '@angular/core';
import { ParallaxService } from 'src/app/service/parallax.service';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent  {


  constructor(private service:ParallaxService){

  }


}
