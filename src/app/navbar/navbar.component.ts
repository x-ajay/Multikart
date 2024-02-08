import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {

  }

  Ontools() {
    this.router.navigate(['new/tools']);
  }
  Onchristmas() {
    this.router.navigate(['new/christmas']);
  }
  Onmarketplace() {
    this.router.navigate(['new/marketplace']);
  }
  Ongame() {
    this.router.navigate(['new/game']);
  }
  Ongym() {
    this.router.navigate(['new/gym']);
  }
  OnMarjuana() {
    this.router.navigate(['new/marijuana']);
  }
  Onleftsidebar() {
    this.router.navigate(['new/leftsidebar']);
  }
  Onjwellery() {
    this.router.navigate(['new/jwellery']);
  }
  Onpets() {
    this.router.navigate(['new/pets']);
  }
  OnMetros(){
    this.router.navigate(['new/metros']);
  }
  Onvideoslider() {
    this.router.navigate(['new/videoslider']);
  }
  OnNursery() {
    this.router.navigate(['new/nursery']);
  }
  Onfashion1() {
    this.router.navigate(['fashion1']);
  }
  Onfashion2() {
    this.router.navigate(['fashion2']);
  }
  Onfashion3() {
    this.router.navigate(['fashion3']);
  }
  Onkids() {
    this.router.navigate(['kids']);
  }
  Onlookbook() {
     this.router.navigate(['lookbook']);
  }
  OnInstagram() {
     this.router.navigate(['instagram']);
  }
  OnVideo() {
     this.router.navigate(['video']);
  }
  Onparallax() {
    this.router.navigate(['parallax']);
  }
  OnFullpage() {
    this.router.navigate(['fullpage']);
  }
  Electronic1() {
     this.router.navigate(['electronic1']);
  }
  Electronic2() {
     this.router.navigate(['electronic2']);
  }

}
