import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeftSidebarComponent } from './sidebar/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './sidebar/right-sidebar/right-sidebar.component';
import { NoSidebarComponent } from './sidebar/no-sidebar/no-sidebar.component';
import { ThumbnailPageComponent } from './thumbnail-page/thumbnail-page.component';
import { LeftImageComponent } from './thumbnail-page/left-image/left-image.component';
import { RightImageComponent } from './thumbnail-page/right-image/right-image.component';
import { ImageOutsideComponent } from './thumbnail-page/image-outside/image-outside.component';
import { ThreeColumnComponent } from './three-column/three-column.component';
import { ThumbnailLeftComponent } from './three-column/thumbnail-left/thumbnail-left.component';
import { ThumbnailRightComponent } from './three-column/thumbnail-right/thumbnail-right.component';
import { ThumbnailBottomComponent } from './three-column/thumbnail-bottom/thumbnail-bottom.component';
import { FourImageComponent } from './four-image/four-image.component';
import { BundleProductComponent } from './bundle-product/bundle-product.component';
import { StickyComponent } from './sticky/sticky.component';
import { AccordianComponent } from './accordian/accordian.component';
import { ImageSwatchComponent } from './image-swatch/image-swatch.component';
import { VerticalTabComponent } from './vertical-tab/vertical-tab.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonComp1Component } from './sidebar/common-comp1/common-comp1.component';

// third party 

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

const routes: Routes = [
  { path: "",component:LeftSidebarComponent},
  { path: "right", component: RightSidebarComponent },
  { path: "no", component: NoSidebarComponent },
  { path: "left1", component: LeftImageComponent},
  { path: "right1", component: RightImageComponent },
  { path: "image", component: ImageOutsideComponent },
  { path: "left2", component: ThumbnailLeftComponent},
  { path: "right2", component: ThumbnailRightComponent },
  { path: "bottom", component: ThumbnailBottomComponent },
  { path: "image2", component: FourImageComponent },
  { path: "bundle", component: BundleProductComponent },
  {path:"sticky",component:StickyComponent},
  { path: "accordian", component: AccordianComponent },
  { path: "image", component: ImageSwatchComponent },
  { path: "vertical", component: VerticalTabComponent},



];



@NgModule({
  declarations: [
    SidebarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    NoSidebarComponent,
    ThumbnailPageComponent,
    LeftImageComponent,
    RightImageComponent,
    ImageOutsideComponent,
    ThreeColumnComponent,
    ThumbnailLeftComponent,
    ThumbnailRightComponent,
    ThumbnailBottomComponent,
    FourImageComponent,
    BundleProductComponent,
    StickyComponent,
    AccordianComponent,
    ImageSwatchComponent,
    VerticalTabComponent,
    CommonComp1Component
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule,
    CarouselModule,
    ButtonModule,
    GalleriaModule,
    [RouterModule.forChild(routes)],
  ]
})
export class ProductsModule { }
