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
    this.router.navigate(['home/tools']);
  }
  Onchristmas() {
    this.router.navigate(['home/christmas']);
  }
  Onmarketplace() {
    this.router.navigate(['home/marketplace']);
  }
  Ongame() {
    this.router.navigate(['home/game']);
  }
  Ongym() {
    this.router.navigate(['home/gym']);
  }
  OnMarjuana() {
    this.router.navigate(['home/marijuana']);
  }
  Onleftsidebar() {
    this.router.navigate(['home/leftsidebar']);
  }
  Onjwellery() {
    this.router.navigate(['home/jwellery']);
  }
  Onpets() {
    this.router.navigate(['home/pets']);
  }
  OnMetros(){
    this.router.navigate(['home/metros']);
  }
  Onvideoslider() {
    this.router.navigate(['home/videoslider']);
  }
  OnNursery() {
    this.router.navigate(['home/nursery']);
  }
  Onfashion1() {
    this.router.navigate(['home/fashion1']);
  }
  Onfashion2() {
    this.router.navigate(['home/fashion2']);
  }
  Onfashion3() {
    this.router.navigate(['home/fashion3']);
  }
  Onkids() {
    this.router.navigate(['home/kids']);
  }
  Onlookbook() {
     this.router.navigate(['home/lookbook']);
  }
  OnInstagram() {
     this.router.navigate(['home/instagram']);
  }
  OnVideo() {
     this.router.navigate(['home/video']);
  }
  Onparallax() {
    this.router.navigate(['home/parallax']);
  }
  OnFullpage() {
    this.router.navigate(['home/fullpage']);
  }
  Electronic1() {
     this.router.navigate(['home/electronic1']);
  }
  Electronic2() {
     this.router.navigate(['home/electronic2']);
  }

}
