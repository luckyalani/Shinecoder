import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateComponent } from '../customer/customer-view/customer-headings/estimate/estimate.component';
import { EstimatePageComponent } from './estimate-page/estimate-page.component';
import { ClickNewFormComponent } from './click-new-form/click-new-form.component';

const routes: Routes = [
  { path: 'estimate-page', component: EstimatePageComponent },
  { path: 'click-form', component: ClickNewFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateRoutingModule { }
