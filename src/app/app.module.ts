import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustPipe } from './common/cust.pipe';
import { CustomDirective } from './common/custom.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommoncompComponent } from './commoncomp/commoncomp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustPipe,
    CustomDirective,
    SidebarComponent,
    CommoncompComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
