
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioGridTwoComponent } from './portfolio/portfolio-grid-two/portfolio-grid-two.component';
import { PortfolioGridThreeComponent } from './portfolio/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioGridFourComponent } from './portfolio/portfolio-grid-four/portfolio-grid-four.component';
import { MasonaryGridTwoComponent } from './portfolio/masonary-grid-two/masonary-grid-two.component';
import { MasonaryGridThreeComponent } from './portfolio/masonary-grid-three/masonary-grid-three.component';
import { MasonaryGridFourComponent } from './portfolio/masonary-grid-four/masonary-grid-four.component';
import { MasonaryFullwidthComponent } from './portfolio/masonary-fullwidth/masonary-fullwidth.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartmodelpopupComponent } from './addtocart/cartmodelpopup/cartmodelpopup.component';
import { QtycounterComponent } from './addtocart/qtycounter/qtycounter.component';
import { CartbottomComponent } from './addtocart/cartbottom/cartbottom.component';
import { CartleftComponent } from './addtocart/cartleft/cartleft.component';
import { CartrightComponent } from './addtocart/cartright/cartright.component';
import { CarttopComponent } from './addtocart/carttop/carttop.component';
import { ThemeelementComponent } from './themeelement/themeelement.component';
import { TittleComponent } from './themeelement/tittle/tittle.component';
import { CollectionBannerComponent } from './themeelement/collection-banner/collection-banner.component';
import { HomeSliderComponent } from './themeelement/home-slider/home-slider.component';
import { CategoryComponent } from './themeelement/category/category.component';
import { ServiceComponent } from './themeelement/service/service.component';
import { ProductElementComponent } from './product-element/product-element.component';
import { ProductBoxComponent } from './product-element/product-box/product-box.component';
import { ProductSliderComponent } from './product-element/product-slider/product-slider.component';
import { NoSliderComponent } from './product-element/no-slider/no-slider.component';
import { MultiSliderComponent } from './product-element/multi-slider/multi-slider.component';
import { TabComponent } from './product-element/tab/tab.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { OrderSucessTwoComponent } from './email-template/order-sucess-two/order-sucess-two.component';
import { RouterModule, Routes } from '@angular/router';
import { FullWidthComponent } from '../shop/full-width/full-width.component';
import { OrderSucessComponent } from './email-template/order-sucess/order-sucess.component';

const routes: Routes = [
  {path: "", component: PortfolioGridTwoComponent },
  {path: "portfolio3", component: PortfolioGridThreeComponent },
  {path: "portfolio4", component: PortfolioGridFourComponent },
  {path: "masonary2", component: MasonaryGridTwoComponent },
  {path: "masonary3", component: MasonaryGridThreeComponent },
  {path: "masonary4", component: MasonaryGridFourComponent },
  { path: "fullwidth", component: FullWidthComponent },
  { path: "cartmodal", component: CartmodelpopupComponent },
  { path: "qtyc", component: QtycounterComponent },
  { path: "cartleft", component: CartleftComponent },
  { path: "cartright", component: CartrightComponent },
  { path: "cartbottom", component: CartbottomComponent },
  { path: "carttop", component: CarttopComponent },
  { path: "tittle", component: TittleComponent },
  { path: "collection", component: CollectionBannerComponent },
  { path: "home2", component: HomeSliderComponent },
  { path: "category", component: CategoryComponent },
  { path: "service", component: ServiceComponent },
  { path: "box", component: ProductBoxComponent },
  { path: "slider", component: ProductSliderComponent },
  { path: "nos", component: NoSliderComponent },
  { path: "multi", component: MultiSliderComponent },
  { path: "tab", component: TabComponent },
  { path: "orders", component: OrderSucessComponent },
  { path: "orders2", component:OrderSucessTwoComponent },








];

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioGridTwoComponent,
    PortfolioGridThreeComponent,
    PortfolioGridFourComponent,
    MasonaryGridTwoComponent,
    MasonaryGridThreeComponent,
    MasonaryGridFourComponent,
    MasonaryFullwidthComponent,
    AddtocartComponent,
    CartmodelpopupComponent,
    QtycounterComponent,
    CartbottomComponent,
    CartleftComponent,
    CartrightComponent,
    CarttopComponent,
    ThemeelementComponent,
    TittleComponent,
    CollectionBannerComponent,
    HomeSliderComponent,
    CategoryComponent,
    ServiceComponent,
    ProductElementComponent,
    ProductBoxComponent,
    ProductSliderComponent,
    NoSliderComponent,
    MultiSliderComponent,
    TabComponent,
    EmailTemplateComponent,
    OrderSucessComponent,
    OrderSucessTwoComponent
  ],
  imports: [
    CommonModule,
     [RouterModule.forChild(routes)],
  ]
})
export class FeaturesModule { }
