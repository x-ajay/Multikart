import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogleftsidebarComponent } from './blogleftsidebar/blogleftsidebar.component';
import { BlogrightsidebarComponent } from './blogrightsidebar/blogrightsidebar.component';
import { NosidebarComponent } from './nosidebar/nosidebar.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { RightSidebarComponent } from '../shop/right-sidebar/right-sidebar.component';

const routes: Routes = [
  {path:"", component: BlogleftsidebarComponent },
  {path:"right", component: RightSidebarComponent },
  {path:"no", component: NosidebarComponent },
  {path:"detail",component:BlogdetailComponent}

]

@NgModule({
  declarations: [
    BlogleftsidebarComponent,
    BlogrightsidebarComponent,
    NosidebarComponent,
    BlogdetailComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],

  ]
})
export class BlogsModule { }
