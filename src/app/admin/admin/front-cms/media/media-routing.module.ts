import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { AddMedia2Component } from './add-media2/add-media2.component';

const routes: Routes = [
  {
    path: '', component:MediaComponent
  },
  {
    path: 'add-media2', component:AddMedia2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
