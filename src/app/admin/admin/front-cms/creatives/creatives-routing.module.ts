import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativesComponent } from './creatives/creatives.component';
import { AddCreativesComponent } from './add-creatives/add-creatives.component';
import { NewCreativeComponent } from './new-creative/new-creative.component';

const routes: Routes = [
  {
    path: '', component:CreativesComponent
  },
  {
    path: 'add-creatives', component:AddCreativesComponent
  },
  {
    path: 'new-creative', component:NewCreativeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreativesRoutingModule { }
