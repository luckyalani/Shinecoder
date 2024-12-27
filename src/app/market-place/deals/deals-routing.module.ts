import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDealComponent } from './new-deal/new-deal.component';
import { DealsStepperComponent } from './deals-stepper/deals-stepper.component';
import { DealsComponent } from './deals/deals.component';
import { DealsInstallComponent } from './deals-install/deals-install.component';
import { EditDealComponent } from './edit-deal/edit-deal.component';
import { AddNewCustomFieldComponent } from './edit-deal/edit/add-new-custom-field/add-new-custom-field.component';
import { EditComponent } from './edit-deal/edit/edit.component';

const routes: Routes = [
  // {path:'new-deal',component:NewDealComponent},
  { path: '', component: DealsComponent },
  {path:'deals-view',component:DealsStepperComponent},
  { path: 'deal-install', component: DealsInstallComponent },
  // {path:'deal-install',component:DealsInstallComponent},
  { path: 'edit-deal', component: EditDealComponent },
  { path: 'new-deal', component: NewDealComponent },
  { path: 'deals-view', component: DealsStepperComponent },
  { path: 'edit-deal/edit/add-custom-field', component: AddNewCustomFieldComponent },
  { path: 'edit-deal/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }
