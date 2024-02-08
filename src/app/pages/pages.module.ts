import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor/vendor.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { BecomeVendorComponent } from './vendor/become-vendor/become-vendor.component';
import { AccountComponent } from './account/account.component';
import { WishlistComponent } from './account/wishlist/wishlist.component';
import { CartComponent } from './account/cart/cart.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { LoginComponent } from './account/login/login.component';
import { LoginAuthComponent } from './account/login-auth/login-auth.component';
import { RegisterComponent } from './account/register/register.component';
import { ContactComponent } from './account/contact/contact.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ProfileComponent } from './account/profile/profile.component';
import { CheckoutComponent } from './account/checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';
import { TypographyComponent } from './typography/typography.component';
import { ReviewComponent } from './review/review.component';
import { CompareComponent } from './compare/compare.component';
import { Compare2Component } from './compare/compare2/compare2.component';
import { CollectionComponent } from './collection/collection.component';
import { LongbookComponent } from './longbook/longbook.component';
import { SidemapComponent } from './sidemap/sidemap.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderSucessComponent } from './../pages/order-sucess/order-sucess.component';
import { LookbookComponent } from '../home/basics/lookbook/lookbook.component';


const routes: Routes = [
  { path: "", component: VendorDashboardComponent },
  { path: "became", component: BecomeVendorComponent },
  { path: "profilev", component: VendorProfileComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "cart", component: CartComponent },
  { path: "dashboard2", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "loginauth", component: LoginAuthComponent },
  { path: "register", component: RegisterComponent },
  { path: "conatct", component: ContactComponent },
  { path: "forgetpass", component: ForgotPasswordComponent },
  { path: "profile3", component: ProfileComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "aboutus", component:AboutusComponent },
  { path: "search", component: SearchComponent },
  { path: "typographyn", component: TypographyComponent },
  { path: "review", component: ReviewComponent },
  { path: "sucess1", component: OrderSucessComponent },
  { path: "compare1", component: CompareComponent },
  { path: "compare2", component: Compare2Component },
  { path: "collection", component: CollectionComponent },
  { path: "lookbook1", component: LookbookComponent },
  { path: "sitemap", component: SidemapComponent },
  { path: "comingsoon", component: ComingSoonComponent },
  { path: "faq", component: FaqComponent },



];




@NgModule({
  declarations: [
    VendorComponent,
    VendorDashboardComponent,
    VendorProfileComponent,
    BecomeVendorComponent,
    AccountComponent,
    WishlistComponent,
    CartComponent,
    DashboardComponent,
    LoginComponent,
    LoginAuthComponent,
    RegisterComponent,
    ContactComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    CheckoutComponent,
    AboutusComponent,
    SearchComponent,
    TypographyComponent,
    ReviewComponent,
    OrderSucessComponent,
    CompareComponent,
    Compare2Component,
    CollectionComponent,
    LongbookComponent,
    SidemapComponent,
    ComingSoonComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class PagesModule { }
