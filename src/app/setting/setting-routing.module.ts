import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { CustomComponent } from './custom/custom.component';
import { AddCustomComponent } from './custom/add-custom/add-custom.component';
import { EmailComponent } from './email/email.component';
import { ClickTempleteComponent } from './email/click-templete/click-templete.component';
import { DepartmentsComponent } from './supports/departments/departments.component';
import { PredefinedRepliesComponent } from './supports/predefined-replies/predefined-replies.component';
import { combineLatest } from 'rxjs';
import { TicketPriorityComponent } from './supports/ticket-priority/ticket-priority.component';
import { TicketStatusComponent } from './supports/ticket-status/ticket-status.component';
import { ServicesComponent } from './supports/services/services.component';
import { SpamFilterComponent } from './supports/spam-filter/spam-filter.component';
import { FormsComponent } from './Estimates/forms/forms.component';
import { StatusComponent } from './Estimates/status/status.component';
import { AddFormsComponent } from './Estimates/forms/add-forms/add-forms.component';
import { ContractComponent } from '../customer/customer-view/customer-headings/contract/contract.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ExpensesCategoriesComponent } from './Finance/expenses-categories/expenses-categories.component';
import { PaymentModesComponent } from './Finance/payment-modes/payment-modes.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfileComponent } from './Organization/profile/profile.component';

const routes: Routes = [

  { path: 'setting-page', component: SettingPageComponent },

  // -----------------Organization-------------------
  {path:'profile',component:ProfileComponent},


  // -----------------Custom-------------------
  { path: 'custom-fields', component: CustomComponent },
  { path: 'add-custom-field', component: AddCustomComponent },


  // -----------------Email-------------------
  { path: 'email', component: EmailComponent },
  { path: 'template', component:ClickTempleteComponent },
  
  // -----------------Supports-------------------
  {path:'departments',component:DepartmentsComponent},
  {path:'predefined-replies',component:PredefinedRepliesComponent},
  {path:'ticket-priority',component:TicketPriorityComponent },
  {path:'ticket-status',component:TicketStatusComponent},
  {path:'services',component:ServicesComponent},
  {path:'spam-filters',component:SpamFilterComponent},

  // -----------------Estimates-------------------
  {path:'forms',component:FormsComponent},
  {path:'add-forms',component:AddFormsComponent},
  {path:'status',component:StatusComponent},
  
  // -----------------Contracts-------------------
  {path:'contracts',component:ContractsComponent},

  // -----------------Finance-------------------
  {path:'expenses-categories',component:ExpensesCategoriesComponent},
  {path:'payment-mode',component:PaymentModesComponent},

   // -----------------Customer-------------------
   {path:'customer',component:CustomerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
