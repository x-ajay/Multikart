import { JwelleryComponent } from './home/new-demos/jwellery/jwellery.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { NewDemosComponent } from './home/new-demos/new-demos.component';
import { ToolsComponent } from './home/new-demos/tools/tools.component';
import { ChristmasComponent } from './home/new-demos/christmas/christmas.component';
import { MarketplaceComponent } from './home/new-demos/marketplace/marketplace.component';
import { GameComponent } from './home/new-demos/game/game.component';
import { GymComponent } from './home/new-demos/gym/gym.component';
import { MarijuanaComponent } from './home/new-demos/marijuana/marijuana.component';
import { LeftSidebarComponent } from './shop/left-sidebar/left-sidebar.component';
import { PetsComponent } from './home/new-demos/pets/pets.component';
import { MetrosComponent } from './home/new-demos/metros/metros.component';
import { VideosliderComponent } from './home/new-demos/videoslider/videoslider.component';
import { NurseryComponent } from './home/new-demos/nursery/nursery.component';
import { Fashion1Component } from './home/clothing/fashion1/fashion1.component';
import { Fashion2Component } from './home/clothing/fashion2/fashion2.component';
import { Fashion3Component } from './home/clothing/fashion3/fashion3.component';
import { KidsComponent } from './home/clothing/kids/kids.component';
import { LookbookComponent } from './home/basics/lookbook/lookbook.component';
import { InstagramComponent } from './home/basics/instagram/instagram.component';
import { VideoComponent } from './home/basics/video/video.component';
import { ParallaxComponent } from './home/basics/parallax/parallax.component';
import { FullpageComponent } from './home/basics/fullpage/fullpage.component';
import { BeautyComponent } from './home/beauty/beauty.component';
import { Electronics1Component } from './home/electronics/electronics1/electronics1.component';
import { Electronics2Component } from './home/electronics/electronics2/electronics2.component';
import { FurnitureComponent } from './home/furniture/furniture.component';
import { VegetablesComponent } from './home/vegetables/vegetables.component';
import { WatchComponent } from './home/watch/watch.component';
import { LightComponent } from './home/light/light.component';
import { GogglesComponent } from './home/goggles/goggles.component';
import { ShoesComponent } from './home/shoes/shoes.component';
import { BagsComponent } from './home/bags/bags.component';
import { FLowersComponent } from './home/flowers/flowers.component';
import { RightSidebarComponent } from './shop/right-sidebar/right-sidebar.component';
import { NoSidebarComponent } from './shop/no-sidebar/no-sidebar.component';
import { SidebarPopupComponent } from './shop/sidebar-popup/sidebar-popup.component';
import { FullWidthComponent } from './shop/full-width/full-width.component';
import { ThreegridComponent } from './shop/threegrid/threegrid.component';
import { SixgridComponent } from './shop/sixgrid/sixgrid.component';
import { LastviewComponent } from './shop/lastview/lastview.component';
import { ShopModule } from './shop/shop.module';
import { BlogleftsidebarComponent } from './blogs/blogleftsidebar/blogleftsidebar.component';
import { NosidebarComponent } from './blogs/nosidebar/nosidebar.component';
import { BlogdetailComponent } from './blogs/blogdetail/blogdetail.component';
import { BlogsModule } from './blogs/blogs.module';
import { LeftImageComponent } from './products/thumbnail-page/left-image/left-image.component';
import { RightImageComponent } from './products/thumbnail-page/right-image/right-image.component';
import { ImageOutsideComponent } from './products/thumbnail-page/image-outside/image-outside.component';
import { ThumbnailLeftComponent } from './products/three-column/thumbnail-left/thumbnail-left.component';
import { ThumbnailRightComponent } from './products/three-column/thumbnail-right/thumbnail-right.component';
import { ThumbnailBottomComponent } from './products/three-column/thumbnail-bottom/thumbnail-bottom.component';
import { FourImageComponent } from './products/four-image/four-image.component';
import { BundleProductComponent } from './products/bundle-product/bundle-product.component';
import { StickyComponent } from './products/sticky/sticky.component';
import { AccordianComponent } from './products/accordian/accordian.component';
import { ImageSwatchComponent } from './products/image-swatch/image-swatch.component';
import { VerticalTabComponent } from './products/vertical-tab/vertical-tab.component';
import { PortfolioGridTwoComponent } from './features/portfolio/portfolio-grid-two/portfolio-grid-two.component';
import { PortfolioGridThreeComponent } from './features/portfolio/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioGridFourComponent } from './features/portfolio/portfolio-grid-four/portfolio-grid-four.component';
import { MasonaryGridTwoComponent } from './features/portfolio/masonary-grid-two/masonary-grid-two.component';
import { MasonaryGridThreeComponent } from './features/portfolio/masonary-grid-three/masonary-grid-three.component';
import { MasonaryGridFourComponent } from './features/portfolio/masonary-grid-four/masonary-grid-four.component';
import { CartmodelpopupComponent } from './features/addtocart/cartmodelpopup/cartmodelpopup.component';
import { QtycounterComponent } from './features/addtocart/qtycounter/qtycounter.component';
import { CartleftComponent } from './features/addtocart/cartleft/cartleft.component';
import { CartrightComponent } from './features/addtocart/cartright/cartright.component';
import { CartbottomComponent } from './features/addtocart/cartbottom/cartbottom.component';
import { CarttopComponent } from './features/addtocart/carttop/carttop.component';
import { TittleComponent } from './features/themeelement/tittle/tittle.component';
import { CollectionBannerComponent } from './features/themeelement/collection-banner/collection-banner.component';
import { HomeSliderComponent } from './features/themeelement/home-slider/home-slider.component';
import { CategoryComponent } from './features/themeelement/category/category.component';
import { ServiceComponent } from './features/themeelement/service/service.component';
import { ProductBoxComponent } from './features/product-element/product-box/product-box.component';
import { ProductSliderComponent } from './features/product-element/product-slider/product-slider.component';
import { NoSliderComponent } from './features/product-element/no-slider/no-slider.component';
import { MultiSliderComponent } from './features/product-element/multi-slider/multi-slider.component';
import { TabComponent } from './features/product-element/tab/tab.component';
import { OrderSucessTwoComponent } from './features/email-template/order-sucess-two/order-sucess-two.component';
import { OrderSucessComponent } from './features/email-template/order-sucess/order-sucess.component';
import { VendorDashboardComponent } from './pages/vendor/vendor-dashboard/vendor-dashboard.component';
import { BecomeVendorComponent } from './pages/vendor/become-vendor/become-vendor.component';
import { VendorProfileComponent } from './pages/vendor/vendor-profile/vendor-profile.component';
import { WishlistComponent } from './pages/account/wishlist/wishlist.component';
import { CartComponent } from './pages/account/cart/cart.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { LoginComponent } from './pages/account/login/login.component';
import { LoginAuthComponent } from './pages/account/login-auth/login-auth.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { ContactComponent } from './pages/account/contact/contact.component';
import { ForgotPasswordComponent } from './pages/account/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { CheckoutComponent } from './pages/account/checkout/checkout.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SearchComponent } from './pages/search/search.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { ReviewComponent } from './pages/review/review.component';
import { CompareComponent } from './pages/compare/compare.component';
import { Compare2Component } from './pages/compare/compare2/compare2.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { SidemapComponent } from './pages/sidemap/sidemap.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  {path: "new/tools",component:ToolsComponent},
  { path: "new/christmas", component: ChristmasComponent },
  { path: "new/marketplace", component: MarketplaceComponent },
  { path: "new/game", component: GameComponent },
  { path: "new/gym", component: GymComponent },
  { path: "new/marijuana", component: MarijuanaComponent },
  { path: "new/leftsidebar", component: LeftSidebarComponent },
  { path: "new/jwellery", component: JwelleryComponent },
  { path: "new/pets", component: PetsComponent },
  { path: "new/metros", component: MetrosComponent },
  { path: "new/videoslider", component: VideosliderComponent },
  { path: "new/nursery", component: NurseryComponent },
  { path: "fashion1", component: Fashion1Component },
  { path: "fashion2", component: Fashion2Component },
  { path: "fashion3", component: Fashion3Component },
  { path: "kids", component: KidsComponent },
  { path: "lookbook", component: LookbookComponent },
  { path: "instagram", component: InstagramComponent },
  { path: "video", component: VideoComponent },
  { path: "parallax", component: ParallaxComponent },
  { path: "fullpage", component: FullpageComponent },
  { path: "beauty", component: BeautyComponent },
  { path: "electronic1", component: Electronics1Component },
  { path: "electronic2", component: Electronics2Component },
  { path: "furniture", component: FurnitureComponent },
  { path: "vegetables", component: VegetablesComponent },
  { path: "watch", component: WatchComponent },
  { path: "light", component: LightComponent },
  { path: "googles", component: GogglesComponent },
  { path: "shoes", component: ShoesComponent },
  { path: "bags", component: BagsComponent },
  { path: "Flowers", component: FLowersComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {path: "left", component: LeftSidebarComponent },
  {path: "right", component: RightSidebarComponent },
  {path: "no", component: NoSidebarComponent },
  {path: "sidebar", component: SidebarPopupComponent },
  {path: "metro", component: MetrosComponent },
  {path: "full", component: FullWidthComponent },
  {path: "gridthree", component: ThreegridComponent },
  {path: "gridsix", component: SixgridComponent },
  { path: "last", component: LastviewComponent },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)
  },
  {path:"left", component: BlogleftsidebarComponent },
  {path:"right", component: RightSidebarComponent },
  {path:"no", component: NosidebarComponent },
  {path:"detail", component: BlogdetailComponent },
  {
    path: 'blog',
    loadChildren: () => import('./blogs/blogs.module').then(mod => mod.BlogsModule)
  },
  { path: "left",component:LeftSidebarComponent},
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
  {
    path: 'product',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule)
  },
  {path: "portfolio2", component: PortfolioGridTwoComponent },
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
  { path: "orders2", component: OrderSucessTwoComponent },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(mod => mod.FeaturesModule)
  },
  { path: "dashboard", component: VendorDashboardComponent },
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
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
