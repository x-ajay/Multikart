import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustPipe } from './common/cust.pipe';
import { CustomDirective } from './common/custom.directive';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommoncompComponent } from './commoncomp/commoncomp.component';
>>>>>>> 4f441868599dba175215f66a441c1a641b0df810

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustPipe,
    CustomDirective,
    SidebarComponent,
    CommoncompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
