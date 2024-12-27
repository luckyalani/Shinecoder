// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class LeadsRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { LeadsNewProposalComponent } from './leads/leads-new-proposal/leads-new-proposal.component';
import { LeadsNewTasksComponent } from './leads/leads-new-tasks/leads-new-tasks.component';
import { EditCustomFieldComponent } from './leads/edit-custom-field/edit-custom-field.component';
import { AddCustomFieldComponent } from './leads/add-custom-field/add-custom-field.component';
import { LeadsViewConvertToCustomerComponent } from './leads/leads-view-stepper/leads-view-convert-to-customer/leads-view-convert-to-customer.component';
import { LeadsViewNewProposalComponent } from './leads/leads-view-stepper/leads-view-new-proposal/leads-view-new-proposal.component';
import { ImportLeadsComponent } from './leads/import-leads/import-leads.component';
import { LeadFilterComponent } from './lead-filter/lead-filter.component';
import { LeadManagerComponent } from './lead-manager/lead-manager.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { AddScgeduleComponent } from './follow-up/add-scgedule/add-scgedule.component';

const routes: Routes = [
  { path: 'lead', component: LeadsComponent },
  { path: 'new-proposal', component: LeadsNewProposalComponent },
  { path: 'edit-customfield', component: EditCustomFieldComponent },
  { path: 'add-customfield', component: AddCustomFieldComponent },
  { path: 'convert-to-customer', component: LeadsViewConvertToCustomerComponent },
  { path: 'view/newProposal', component: LeadsViewNewProposalComponent },
  { path: 'import-leads', component: ImportLeadsComponent },
  { path: 'lead-filter', component: LeadFilterComponent },
  { path: 'Lead-Manager', component: LeadManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsRoutingModule { }
