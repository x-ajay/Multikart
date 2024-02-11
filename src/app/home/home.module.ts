import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDemosComponent } from './new-demos/new-demos.component';
import { ToolsComponent } from './new-demos/tools/tools.component';
import { ChristmasComponent } from './new-demos/christmas/christmas.component';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './new-demos/marketplace/marketplace.component';
import { GameComponent } from './new-demos/game/game.component';
import { GymComponent } from './new-demos/gym/gym.component';
import { MarijuanaComponent } from './new-demos/marijuana/marijuana.component';
import { LeftSidebarComponent } from './new-demos/left-sidebar/left-sidebar.component';
import { JwelleryComponent } from './new-demos/jwellery/jwellery.component';
import { PetsComponent } from './new-demos/pets/pets.component';
import { MetrosComponent } from './new-demos/metros/metros.component';
import { VideosliderComponent } from './new-demos/videoslider/videoslider.component';
import { NurseryComponent } from './new-demos/nursery/nursery.component';
import { ClothingComponent } from './clothing/clothing.component';
import { BasicsComponent } from './basics/basics.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { WatchComponent } from './watch/watch.component';
import { LightComponent } from './light/light.component';
import { GogglesComponent } from './goggles/goggles.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BagsComponent } from './bags/bags.component';
import { FLowersComponent } from './flowers/flowers.component';
import { Fashion1Component } from './clothing/fashion1/fashion1.component';
import { Fashion2Component } from './clothing/fashion2/fashion2.component';
import { Fashion3Component } from './clothing/fashion3/fashion3.component';
import { KidsComponent } from './clothing/kids/kids.component';
import { InstagramComponent } from './basics/instagram/instagram.component';
import { VideoComponent } from './basics/video/video.component';
import { ParallaxComponent } from './basics/parallax/parallax.component';
import { FullpageComponent } from './basics/fullpage/fullpage.component';
import { Electronics1Component } from './electronics/electronics1/electronics1.component';
import { Electronics2Component } from './electronics/electronics2/electronics2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Lookbook1Component } from './basics/lookbook1/lookbook1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';

const routes: Routes = [
  {path: "",component:HomepageComponent},
  {path: "tools",component:ToolsComponent},
  { path: "christmas", component: ChristmasComponent },
  { path: "marketplace", component: MarketplaceComponent },
  { path: "game", component: GameComponent },
  { path: "gym", component: GymComponent },
  { path: "marijuana", component: MarijuanaComponent },
  { path: "leftsidebar", component: LeftSidebarComponent },
  { path: "jwellery", component: JwelleryComponent },
  { path: "pets", component: PetsComponent },
  { path: "metros", component: MetrosComponent },
  { path: "videoslider", component: VideosliderComponent },
  { path: "nursery", component: NurseryComponent },
  { path: "fashion1", component: Fashion1Component },
  { path: "fashion2", component: Fashion2Component },
  { path: "fashion3", component: Fashion3Component },
  { path: "kids", component: KidsComponent },
  { path: "lookbook", component: Lookbook1Component },
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



];


@NgModule({
  declarations: [
    NewDemosComponent,
       ToolsComponent,
       ChristmasComponent,
       MarketplaceComponent,
       GameComponent,
       GymComponent,
       MarijuanaComponent,
       LeftSidebarComponent,
       JwelleryComponent,
       PetsComponent,
       MetrosComponent,
       VideosliderComponent,
       NurseryComponent,
       ClothingComponent,
       BasicsComponent,
       BeautyComponent,
       ElectronicsComponent,
       FurnitureComponent,
       VegetablesComponent,
       WatchComponent,
       LightComponent,
       GogglesComponent,
       ShoesComponent,
       BagsComponent,
       FLowersComponent,
       Fashion1Component,
       Fashion2Component,
       Fashion3Component,
       KidsComponent,
       Lookbook1Component,
       InstagramComponent,
       VideoComponent,
       ParallaxComponent,
       FullpageComponent,
       Electronics1Component,
       Electronics2Component,
       HomepageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    [RouterModule.forChild(routes)],
  ]
})
export class HomeModule { }
