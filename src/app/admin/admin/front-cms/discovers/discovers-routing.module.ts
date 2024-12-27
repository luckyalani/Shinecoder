import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { NewDiscoverComponent } from './new-discover/new-discover.component';
import { AddDiscoverComponent } from '../creatives/add-discover/add-discover.component';

const routes: Routes = [
  {
    path:'', component:DiscoverComponent
  },
  {
    path:'new-discover', component:NewDiscoverComponent
  },
  {
    path:'add-discover', component:AddDiscoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoversRoutingModule { }
