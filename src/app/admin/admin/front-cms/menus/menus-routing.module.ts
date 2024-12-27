import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddMediaComponent } from './add-media/add-media.component';

const routes: Routes = [
  {
    path: '', component:MenusComponent
  },
  {
    path: 'add-menu', component:AddMenuComponent
  },
  {
    path: 'add-media', component:AddMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
