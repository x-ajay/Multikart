import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NoSidebarComponent } from './no-sidebar/no-sidebar.component';
import { SidebarPopupComponent } from './sidebar-popup/sidebar-popup.component';
import { MetroComponent } from './metro/metro.component';
import { FullWidthComponent } from './full-width/full-width.component';
import { ThreegridComponent } from './threegrid/threegrid.component';
import { SixgridComponent } from './sixgrid/sixgrid.component';
import { LastviewComponent } from './lastview/lastview.component';
import { RouterModule, Routes } from '@angular/router';
import { MetrosComponent } from '../home/new-demos/metros/metros.component';

const routes: Routes = [
  {path: "", component: LeftSidebarComponent },
  {path: "right", component: RightSidebarComponent },
  {path: "no", component: NoSidebarComponent },
  {path: "sidebar", component: SidebarPopupComponent },
  {path: "metro", component: MetrosComponent },
  {path: "full", component: FullWidthComponent },
  {path: "gridthree", component: ThreegridComponent },
  {path: "gridsix", component: SixgridComponent },
  {path: "last", component: LastviewComponent },


]

@NgModule({
  declarations: [
    LeftSidebarComponent,
    RightSidebarComponent,
    NoSidebarComponent,
    SidebarPopupComponent,
    MetroComponent,
    FullWidthComponent,
    ThreegridComponent,
    SixgridComponent,
    LastviewComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class ShopModule { }
