import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { CreatePageComponent } from './create-page/create-page.component';

const routes: Routes = [
  {
    path : '', component: PagesComponent
  },
  {
    path : 'create-page', component: CreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
