import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { MaterialModule } from '../material/material.module';
import { CustomComponent } from './custom/custom.component';
import { AddCustomComponent } from './custom/add-custom/add-custom.component';
import { EmailComponent } from './email/email.component';
import { ClickTempleteComponent } from './email/click-templete/click-templete.component';
import { DepartmentsComponent } from './supports/departments/departments.component';
import { PredefinedRepliesComponent } from './supports/predefined-replies/predefined-replies.component';
import { NewDepartmentComponent } from './supports/departments/new-department/new-department.component';
import { AddPredefinedRepliesComponent } from './supports/predefined-replies/add-predefined-replies/add-predefined-replies.component';
import { TicketPriorityComponent } from './supports/ticket-priority/ticket-priority.component';
import { TicketStatusComponent } from './supports/ticket-status/ticket-status.component';
import { ServicesComponent } from './supports/services/services.component';
import { SpamFilterComponent } from './supports/spam-filter/spam-filter.component';
import { AddPriorityComponent } from './supports/ticket-priority/add-priority/add-priority.component';
import { AddStatusComponent } from './supports/ticket-status/add-status/add-status.component';
import { AddServiceComponent } from './supports/services/add-service/add-service.component';
import { AddSpamFilterComponent } from './supports/spam-filter/add-spam-filter/add-spam-filter.component';
import { StatusComponent } from './Estimates/status/status.component';
import { FormsComponent } from './Estimates/forms/forms.component';
import { AddFormsComponent } from './Estimates/forms/add-forms/add-forms.component';
import { AddEstmatesStatusComponent } from './Estimates/status/add-estmates-status/add-estmates-status.component';
import { ContractsComponent } from './contracts/contracts.component';
import { AddContractsComponent } from './contracts/add-contracts/add-contracts.component';
import { PaymentModesComponent } from './Finance/payment-modes/payment-modes.component';
import { ExpensesCategoriesComponent } from './Finance/expenses-categories/expenses-categories.component';
import { AddPaymentModeComponent } from './Finance/payment-modes/add-payment-mode/add-payment-mode.component';
import { NewCategoryComponent } from './Finance/expenses-categories/new-category/new-category.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { BrandComponent } from './Organization/brand/brand.component';
import { ProfileComponent } from './Organization/profile/profile.component';
import { EditCurrencyComponent } from './Organization/profile/edit-currency/edit-currency.component';


@NgModule({
  declarations: [
    SettingPageComponent,
    CustomComponent,
    AddCustomComponent,
    EmailComponent,
    ClickTempleteComponent,
    DepartmentsComponent,
    PredefinedRepliesComponent,
    NewDepartmentComponent,
    AddPredefinedRepliesComponent,
    TicketPriorityComponent,
    TicketStatusComponent,
    ServicesComponent,
    SpamFilterComponent,
    AddPriorityComponent,
    AddStatusComponent,
    AddServiceComponent,
    AddSpamFilterComponent,
    StatusComponent,
    FormsComponent,
    AddFormsComponent,
    AddEstmatesStatusComponent,
    ContractsComponent,
    AddContractsComponent,
    PaymentModesComponent,
    ExpensesCategoriesComponent,
    AddPaymentModeComponent,
    NewCategoryComponent,
    CustomerComponent,
    AddCustomerComponent,
    BrandComponent,
    ProfileComponent,
    EditCurrencyComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MaterialModule
  ]
})
export class SettingModule { }
